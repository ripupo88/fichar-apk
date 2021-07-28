import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {Datos} from '../components/Form/Datos';
import {Header} from '../components/Header';

interface Props extends StackScreenProps<any, any> {}

export const EmpresaScreen = ({route}: Props) => {
  console.log(route);
  const {code, alias, name, cif} = route.params?.data;

  return (
    <View>
      <Header text={alias} />
      <Datos title={'Nombre'} data={name} />
      <Datos title={'CIF'} data={cif} />
      <Datos title={'Código'} data={code} />
      <Header text={'Mostrar'} />
    </View>
  );
};
