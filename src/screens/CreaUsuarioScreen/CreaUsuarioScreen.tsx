//core
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//external
import {StackScreenProps} from '@react-navigation/stack';
//local
import {FormTextInput} from '../../components/FormTextInput';
import {Header} from '../../components/Header';
import {CreaUsuarioHook} from './CreaUsuarioHook';
import {creaUsuarioStyle} from './CreaUsuarioStyle';

interface Props extends StackScreenProps<any, any> {}

export const CreaUsuarioScreen = ({route}: Props) => {
  const {alias, fullName, nif, handleCreate, onChange} = CreaUsuarioHook(
    route.params?.username,
  );
  return (
    <>
      <Header text={'Nuevo trabajador'} />
      <View style={creaUsuarioStyle().container}>
        <FormTextInput
          title={'Alias'}
          onChangeText={(value) => onChange(value, 'alias')}
          value={alias}
          placeholder={'ej. Pepe'}
        />

        <FormTextInput
          title={'Nombre completo'}
          onChangeText={(value) => onChange(value, 'fullName')}
          value={fullName}
          placeholder={'ej. José Perez Lopez'}
        />

        <FormTextInput
          title={'NIF/NIE'}
          onChangeText={(value) => onChange(value, 'nif')}
          value={nif}
          placeholder={'ej. 412345678W'}
        />

        <TouchableOpacity
          style={creaUsuarioStyle().myBoton}
          onPress={handleCreate}>
          <Text style={creaUsuarioStyle().textBoton}>Crear</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
