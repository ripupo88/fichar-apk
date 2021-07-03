import React from 'react';
// import {LoadingScreen} from '../screens/LoadingScreem';
import {MenuLateral} from './MenuLateral';
import {AdminLateral} from './AdminLateral';

import {createStackNavigator} from '@react-navigation/stack';
import {LogInNavegation} from './LogInNavegation';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Stack = createStackNavigator();

export const MainNavegation = () => {
  const {
    state: {isLoggedin, user},
  } = useContext(AuthContext);
  const role = user?.role;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        !isLoggedin ? (
          <Stack.Screen name="LogInNavegation" component={LogInNavegation} />
        ) : role === 'ADMIN' ? (
          <Stack.Screen name="AdminLateral" component={AdminLateral} />
        ) : (
          <Stack.Screen name="MenuLateral" component={MenuLateral} />
        )
        // <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      }
    </Stack.Navigator>
  );
};
