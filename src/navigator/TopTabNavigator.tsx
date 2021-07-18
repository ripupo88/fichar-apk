import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {LogBox} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {FicharScreen} from '../screens/FicharScreen/FicharScreen';
import {HistoriaScreen} from '../screens/HistoriaScreen';
import {HorarioScreen} from '../screens/HorarioScreen';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop}}
      // sceneContainerStyle={{
      //   backgroundColor: 'white',
      // }}
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
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Fichar':
              iconName = 'qr-code-outline';
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
      <Tab.Screen name="Fichar" component={FicharScreen} />
      <Tab.Screen name="Historia" component={HistoriaScreen} />
      <Tab.Screen name="Horarios" component={HorarioScreen} />
    </Tab.Navigator>
  );
};
