import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenDecoded} from '../types/types';
import jwt_decode from 'jwt-decode';
import {LoadingScreen} from '../screens/LoadingScreem';
import {MenuLateral} from './MenuLateral';
import {AdminLateral} from './AdminLateral';
import {SingInScreen} from '../screens/SingInScreen';
import {LoginScreen} from '../screens/LoginScreen';

export const MainNavegation = () => {
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
    <>
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
    </>
  );
};
