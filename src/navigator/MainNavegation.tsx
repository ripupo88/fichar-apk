import React from 'react';
import {LoadingScreen} from '../screens/LoadingScreem';
import {MenuLateral} from './MenuLateral';
import {AdminLateral} from './AdminLateral';

import {createStackNavigator} from '@react-navigation/stack';
import {LogInNavegation} from './LogInNavegation';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {CreaUsuarioScreen} from '../screens/CreaUsuarioScreen/CreaUsuarioScreen';
import {UserScreen} from '../screens/UserScreen';
import {EmpresaScreen} from '../screens/EmpresaScreen';
import {QRScanScreen} from '../screens/QRScanScreen';

const Stack = createStackNavigator();

export const MainNavegation = () => {
  const {
    state: {isLoggedin, loading, user},
  } = useContext(AuthContext);
  const role = user?.role;
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      {loading ? (
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
      ) : !isLoggedin ? (
        <Stack.Screen
          name="LogInNavegation"
          component={LogInNavegation}
          options={{headerShown: false}}
        />
      ) : role === 'ADMIN' ? (
        <>
          <Stack.Screen
            name="AdminLateral"
            component={AdminLateral}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreaUsuarioScreen"
            component={CreaUsuarioScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{headerShown: true, headerTitle: 'Ajustes'}}
          />
          <Stack.Screen
            name="EmpresaScreen"
            component={EmpresaScreen}
            options={{headerShown: true, headerTitle: 'Ajustes'}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="MenuLateral"
            options={{headerShown: false}}
            component={MenuLateral}
          />
          <Stack.Screen
            name="QRScanScreen"
            component={QRScanScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
