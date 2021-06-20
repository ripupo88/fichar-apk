import React, {createContext} from 'react';

export interface AuthState {
  isLoggedin: boolean;
  userName?: string;
  favoriteIcon?: string;
}

export const AuthInitialState: AuthState = {
  isLoggedin: false,
  userName: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  AuthState: AuthState;
  singin: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  return (
    <AuthContext.Provider
      value={{
        AuthState: AuthInitialState,
        singin: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
