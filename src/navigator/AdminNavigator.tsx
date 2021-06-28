import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {LogBox, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {FicharScreen} from '../screens/FicharScreen';
import {HistoriaScreen} from '../screens/HistoriaScreen';
import {HorarioScreen} from '../screens/HorarioScreen';
import {AdminScreen} from '../screens/AdminScreen';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const AdminNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Admin':
              iconName = 'eye-outline';
              break;

            case 'Historia':
              iconName = 'return-up-back-outline';
              break;

            case 'Horarios':
              iconName = 'alarm-outline';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Admin" component={AdminScreen} />
      <Tab.Screen name="Historia" component={HistoriaScreen} />
      <Tab.Screen name="Horarios" component={HorarioScreen} />
    </Tab.Navigator>
  );
};
