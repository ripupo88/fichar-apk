import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {SingInScreen} from '../screens/SingInScreen';

const Stack = createStackNavigator();

export const LogInNavegation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SingInScreen" component={SingInScreen} />
    </Stack.Navigator>
  );
};
