import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';


LogBox.ignoreLogs(['Sending'])


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top:paddingTop } = useSafeAreaInsets()


  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary
        },
        style: {
          shadowColor:'transparent',
          elevation: 0,
        },
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch( route.name ) {
            case 'Fichar':
              iconName = 'qr-code-outline'
            break;

            case 'Historia':
              iconName = 'return-up-back-outline'
            break;

            case 'Horarios':
              iconName = 'alarm-outline'
            break;
          }

          return <Icon name={ iconName } size={ 20 } color={ color } />
        }
      })}
    >
      <Tab.Screen name="Fichar" component={ Tab1Screen } />
      <Tab.Screen name="Historia" component={ Tab2Screen } />
      <Tab.Screen name="Horarios" component={ Tab3Screen } />
    </Tab.Navigator>
  );
}