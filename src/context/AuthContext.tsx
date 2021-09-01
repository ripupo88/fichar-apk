import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useCallback, useReducer} from 'react';
import {useEffect} from 'react';
import {Api, Data} from '../ports/api/api';
import {loginRes, UserData} from '../interfaces/appInteface';
import AuthReducer from './AuthReducer';
import PushNotification from 'react-native-push-notification';
import {
  getUniqueId,
  getDeviceName,
  getModel,
  getBrand,
} from 'react-native-device-info';
import {useRef} from 'react';
let notifToken: string = '';
export interface AuthState {
  isLoggedin: boolean;
  error: '';
  user?: UserData;
  loading: boolean;
  token: string;
  NotifToken: string;
}

export const AuthInitialState: AuthState = {
  error: '',
  isLoggedin: false,
  user: undefined,
  loading: true,
  token: '',
  NotifToken: '',
};

export interface AuthContextProps {
  state: AuthState;
  logIn: (username: string, password: string) => void;
  SingUp: (data: Data) => void;
  LogOut: () => void;
  gotError: (err: string) => void;
  loginByToken: (cancel?: boolean) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);
  const api = useRef(new Api());
  const loginByToken = useCallback(
    async (cancel?: boolean) => {
      console.log('llama ya');
      if (!cancel) {
        const token = await AsyncStorage.getItem('token');
        if (typeof token === 'string' && token !== '') {
          const res = await api.current.Token(token);
          if (typeof res !== 'undefined' && typeof res !== 'string') {
            await AsyncStorage.setItem('token', res.accesToken);
            dispatch({
              type: 'LogIn',
              payload: {user: res.user, token: res.accesToken},
            });
          } else {
            AsyncStorage.removeItem('token');
            dispatch({type: 'NoToken'});
          }
        } else {
          dispatch({type: 'NoToken'});
        }
      }
    },
    [api],
  );

  useEffect(() => {
    loginByToken();
    return () => {
      loginByToken(true);
    };
  }, [loginByToken]);

  const logIn = async (username: string, password: string) => {
    const res: loginRes = await api.current.login(
      username,
      password,
      notifToken,
    );
    if (typeof res === 'string') {
      gotError('Revise sus credenciales');
    } else {
      if (typeof res !== 'undefined') {
        await AsyncStorage.setItem('token', res.accesToken);
        dispatch({
          type: 'LogIn',
          payload: {user: res.user, token: res.accesToken},
        });
      } else {
        gotError('Ha ocurrido un error');
      }
    }
  };

  const SingUp = async (data: Data) => {
    const res: loginRes = await api.current.Registro({...data, notifToken});

    if (typeof res === 'string') {
      gotError(res);
    } else {
      dispatch({
        type: 'LogIn',
        payload: {user: res.user, token: res.accesToken},
      });
      await AsyncStorage.setItem('token', res.accesToken);
    }
  };

  const gotError = useCallback((err: string) => {
    dispatch({type: 'Error', payload: err});
  }, []);

  const LogOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'LogOut', payload: state});
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        logIn,
        SingUp,
        gotError,
        LogOut,
        loginByToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    if (notifToken === '') {
      notifToken = token.token;
    }
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,
  requestPermissions: true,
});
