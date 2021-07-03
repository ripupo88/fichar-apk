import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useReducer} from 'react';
import {Api, Data} from '../api/api';
import {loginRes, UserData} from '../interfaces/appInteface';
import AuthReducer from './AuthReducer';

export interface AuthState {
  isLoggedin: boolean;
  error: '';
  user?: UserData;
}

export const AuthInitialState: AuthState = {
  error: '',
  isLoggedin: false,
  user: undefined,
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

  const logIn = async (username: string, password: string) => {
    const api = new Api();
    const res: loginRes = await api.login(username, password);
    if (typeof res === 'string') {
      console.log(res);
      gotError(res);
    } else {
      dispatch({type: 'LogIn', payload: res.user});
      await AsyncStorage.setItem('token', res.accesToken);
    }
  };
  const SingUp = async (data: Data) => {
    const api = new Api();
    const res: loginRes = await api.Registro(data);
    if (typeof res === 'string') {
      gotError(res);
    } else {
      dispatch({type: 'LogIn', payload: res.user});
    }
  };

  const gotError = (err: string) => {
    dispatch({type: 'Error', payload: err});
  };

  const LogOut = () => {
    // dispatch({type: 'LogIn', payload: state});
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
