import React from 'react';
import {LoadingScreen} from '../screens/LoadingScreem';
import {MenuLateral} from './MenuLateral';
import {AdminLateral} from './AdminLateral';

import {createStackNavigator} from '@react-navigation/stack';
import {LogInNavegation} from './LogInNavegation';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {CreaUsuarioScreen} from '../screens/CreaUsuarioScreen';

const Stack = createStackNavigator();

export const MainNavegation = () => {
  const {
    state: {isLoggedin, loading, user},
  } = useContext(AuthContext);
  const role = user?.role;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {loading ? (
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      ) : !isLoggedin ? (
        <Stack.Screen name="LogInNavegation" component={LogInNavegation} />
      ) : role === 'ADMIN' ? (
        <>
          <Stack.Screen name="AdminLateral" component={AdminLateral} />
          <Stack.Screen
            name="CreaUsuarioScreen"
            component={CreaUsuarioScreen}
          />
        </>
      ) : (
        <Stack.Screen name="MenuLateral" component={MenuLateral} />
      )}
    </Stack.Navigator>
  );
};
