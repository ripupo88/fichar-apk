import React, {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

export interface AuthState {
  isLoggedin: boolean;
  userName?: string;
}

export const AuthInitialState: AuthState = {
  isLoggedin: false,
  userName: undefined,
};

export interface AuthContextProps {
  AuthState: AuthState;
  logIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthInitialState);

  const logIn = () => {
    dispatch({type: 'LogIn', payload: state});
  };

  return (
    <AuthContext.Provider
      value={{
        AuthState: AuthInitialState,
        logIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
