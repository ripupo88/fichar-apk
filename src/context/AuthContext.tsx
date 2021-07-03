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
}

export const AuthInitialState: AuthState = {
  error: '',
  isLoggedin: false,
  user: undefined,
  loading: true,
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
  useEffect(() => {
    loginByToken();
  }, []);

  const loginByToken = async () => {
    const api = new Api();
    const token = await AsyncStorage.getItem('token');
    if (typeof token === 'string' && token !== '') {
      const res = await api.Token(token);
      console.log(res);
      if (typeof res !== 'undefined') {
        dispatch({type: 'LogIn', payload: res.user});
        console.log(res);
      }
    } else {
      dispatch({type: 'NoToken'});
    }
  };

  const logIn = async (username: string, password: string) => {
    const api = new Api();
    const res: loginRes = await api.login(username, password);

    if (typeof res === 'string') {
      gotError('Revise sus credenciales');
    } else {
      if (typeof res !== 'undefined') {
        dispatch({type: 'LogIn', payload: res.user});
        await AsyncStorage.setItem('token', res.accesToken);
      } else {
        gotError('Ha ocurrido un error');
      }
    }
  };

  const SingUp = async (data: Data) => {
    const api = new Api();
    const res: loginRes = await api.Registro(data);
    console.log('res', res);
    if (typeof res === 'string') {
      gotError(res);
    } else {
      dispatch({type: 'LogIn', payload: res.user});
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
