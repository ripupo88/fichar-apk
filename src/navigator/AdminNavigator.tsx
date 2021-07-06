import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {LogBox, StyleSheet} from 'react-native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {HistoriaScreen} from '../screens/HistoriaScreen';
import {HorarioScreen} from '../screens/HorarioScreen';
import {AdminScreen} from '../screens/AdminScreen';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialBottomTabNavigator();

export const AdminNavigator = () => {
  // const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={localstyle.container}
      barStyle={localstyle.barstyle}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Admin':
              iconName = 'eye-outline';
              break;

            case 'Buzón':
              iconName = 'albums-outline';
              break;

            case 'Datos':
              iconName = 'analytics-outline';
              break;
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name="Admin" component={AdminScreen} />
      <Tab.Screen
        name="Buzón"
        component={HistoriaScreen}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Datos" component={HorarioScreen} />
    </Tab.Navigator>
  );
};

const localstyle = StyleSheet.create({
  container: {backgroundColor: 'red'},
  barstyle: {backgroundColor: 'white'},
});
