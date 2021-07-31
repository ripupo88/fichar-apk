import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Datos} from '../components/Form/Datos';
import {Header} from '../components/Header';
import {useAdminSocket} from '../hooks/useSocket';

interface Props extends StackScreenProps<any, any> {}

export const EmpresaScreen = ({route}: Props) => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(route.params);
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
