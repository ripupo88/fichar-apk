import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {UserData} from '../interfaces/appInteface';

interface Props extends StackScreenProps<any, any> {}

export const EmpresaScreen = ({route}: Props) => {
  //   const {}: UserData = route.params?.user;
  //   console.log(nif);
  return (
    <View>
      <Header text={'Cafeteria'} />
      <Text>Datos del trabajador</Text>
    </View>
  );
};

const localstyles = StyleSheet.create({});
