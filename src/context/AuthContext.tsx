import React, {createContext, useReducer} from 'react';
import {UserData} from '../interfaces/appInteface';
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
  AuthState: AuthState;
  logIn: () => void;
  SingUp: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);

  const logIn = () => {
    dispatch({type: 'LogIn', payload: state});
  };
  const SingUp = () => {
    dispatch({type: 'SingUp', payload: state});
  };

  return (
    <AuthContext.Provider
      value={{
        AuthState: AuthInitialState,
        logIn,
        SingUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
