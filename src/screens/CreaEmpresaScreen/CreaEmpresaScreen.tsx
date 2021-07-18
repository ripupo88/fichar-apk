import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FormTextInput} from '../../components/FormTextInput';
import {Header} from '../../components/Header';
import {CreaEmpresaHook} from './CreaEmpresaHook';
import {creaEmpresaStyle} from './CreaEmpresaStyle';

export const CreaEmpresaScreen = () => {
  const {alias, raSocial, cif, handleCreate, onChange} = CreaEmpresaHook();

  return (
    <>
      <Header text={'Nueva empresa'} />
      <View style={creaEmpresaStyle().container}>
        <FormTextInput
          title={'Alias'}
          onChangeText={(value) => onChange(value, 'alias')}
          value={alias}
          placeholder={'ej. Tienda'}
        />
        <FormTextInput
          title={'Razon social'}
          onChangeText={(value) => onChange(value, 'raSocial')}
          value={raSocial}
          placeholder={'ej. Canary transport S.L.'}
        />
        <FormTextInput
          title={'CIF'}
          onChangeText={(value) => onChange(value, 'cif')}
          value={cif}
          placeholder={'eej. B38123456'}
        />

        <TouchableOpacity
          style={creaEmpresaStyle().myBoton}
          onPress={handleCreate}>
          <Text style={creaEmpresaStyle().textBoton}>Crear</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
