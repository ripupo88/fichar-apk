import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Datos} from '../components/Datos';
import {Header} from '../components/Header';
import {UserData} from '../interfaces/appInteface';

interface Props extends StackScreenProps<any, any> {}

export const UserScreen = ({route}: Props) => {
  const {username, activo, alias, fullName, nif}: UserData = route.params?.user;
  console.log(nif);
  return (
    <View>
      <Header text={alias || ''} />
      <Datos title={'Nombre'} data={fullName || ''} />
      <Datos title={'Nombre'} data={fullName || ''} />
      <Datos title={'Nombre'} data={fullName || ''} />

      <Text>DNI/NIE:</Text>
      <Text>{nif}</Text>
      <Text>Nombre de Usuario:</Text>
      <Text>{username}</Text>
      <Text>Trabajador Activo:</Text>
      <Text>{activo ? 'Si' : 'No'}</Text>
    </View>
  );
};

const localstyles = StyleSheet.create({});
