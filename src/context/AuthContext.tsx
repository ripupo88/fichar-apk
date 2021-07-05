import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useReducer} from 'react';
import {useEffect} from 'react';
import {Api, Data} from '../api/api';
import {loginRes, UserData} from '../interfaces/appInteface';
import AuthReducer from './AuthReducer';

export interface AuthState {
  isLoggedin: boolean;
  error: '';
  user?: UserData;
  loading: boolean;
  token: string;
}

export const AuthInitialState: AuthState = {
  error: '',
  isLoggedin: false,
  user: undefined,
  loading: true,
  token: '',
};

export interface AuthContextProps {
  state: AuthState;
  logIn: (username: string, password: string) => void;
  SingUp: (data: Data) => void;
  LogOut: () => void;
  gotError: (err: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);
  const api = new Api();
  useEffect(() => {
    loginByToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginByToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (typeof token === 'string' && token !== '') {
      const res = await api.Token(token);
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
      console.log('object');
      dispatch({type: 'NoToken'});
    }
  };

  const logIn = async (username: string, password: string) => {
    const res: loginRes = await api.login(username, password);
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
    const res: loginRes = await api.Registro(data);
    console.log('res', res);
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

  const gotError = (err: string) => {
    dispatch({type: 'Error', payload: err});
  };

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
      }}>
      {children}
    </AuthContext.Provider>
  );
};
