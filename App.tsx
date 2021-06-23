import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import {MenuLateral} from './src/navigator/MenuLateral';
import {LoginScreen} from './src/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {SingInScreen} from './src/screens/SingInScreen';
import {LoadingScreen} from './src/screens/LoadingScreem';
import jwt_decode from 'jwt-decode';
import {TokenDecoded} from './src/types/types';
import {AdminLateral} from './src/navigator/AdminLateral';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<any>(false);
  const [registro, setRegistro] = useState(false);
  const [decoded, setDecoded] = useState<TokenDecoded>({
    role: 'USER',
    exp: 0,
    iat: 0,
    username: 'User',
  });

  useEffect(() => {
    AsyncStorage.getItem('token').then((res: any) => {
      setLoading(false);
      if (res) {
        const myRes = JSON.parse(res);
        setDecoded(jwt_decode(myRes.accesToken));
        if (myRes?.accesToken) {
          setToken(true);
        }
      }
    });
  }, [token]);

  return (
    <NavigationContainer>
      <AppState>
        {loading ? (
          <LoadingScreen />
        ) : token ? (
          decoded.role === 'USER' ? (
            <MenuLateral />
          ) : (
            <AdminLateral />
          )
        ) : registro ? (
          <SingInScreen registro={setRegistro} />
        ) : (
          <LoginScreen token={setToken} registro={setRegistro} />
        )}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
