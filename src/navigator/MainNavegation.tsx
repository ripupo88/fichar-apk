import React from 'react';
import {LoadingScreen} from '../screens/LoadingScreem';
import {MenuLateral} from './MenuLateral';
import {AdminLateral} from './AdminLateral';

import {createStackNavigator} from '@react-navigation/stack';
import {LogInNavegation} from './LogInNavegation';

const Stack = createStackNavigator();

export const MainNavegation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogInNavegation" component={LogInNavegation} />
      <Stack.Screen name="MenuLateral" component={MenuLateral} />
      <Stack.Screen name="AdminLateral" component={AdminLateral} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    </Stack.Navigator>
  );
};
