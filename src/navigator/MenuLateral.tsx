import React, {useContext} from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopTabNavigator} from './TopTabNavigator';
import {AuthContext} from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={TopTabNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const {LogOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            ...localstyle.row,
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={23} color="black" />
          <Text style={styles.menuTexto}> Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            ...localstyle.row,
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={23} color="black" />
          <Text style={styles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            ...localstyle.row,
          }}
          onPress={() => LogOut()}>
          <Icon name="log-out-outline" size={23} color="black" />
          <Text style={styles.menuTexto}> Salir</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const localstyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
