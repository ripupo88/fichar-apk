import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import {Api, Empresa, Usuario} from '../api/api';
import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';

export const CreaUsuarioScreen = () => {
  const {alias, fullName, nif, onChange} = useForm({
    alias: '',
    fullName: '',
    nif: '',
  });

  const navegate = useNavigation();
  const api = new Api();
  const {
    state: {token},
  } = useContext(AuthContext);

  const handleCreate = async () => {
    const data: Usuario = {
      alias,
      fullName,
      nif,
    };
    const res = await api.CreaUsuario(data, token);
    if (res?.status === 201) {
      onChange('', 'fullName');
      onChange('', 'alias');
      onChange('', 'nif');
      Keyboard.dismiss();
      navegate.goBack();
    } else {
      Alert.alert(
        'Ah ocurrido un error',
        'intentelo más tarde o contacte al administrador',
      );
    }
  };

  return (
    <View style={localStyles.container}>
      <Text style={localStyles.logoText}>Nuevo Trabajador</Text>
      <Text style={localStyles.myText}>Selecione un alias*</Text>
      <TextInput
        style={localStyles.input}
        onChangeText={(value) => onChange(value, 'alias')}
        value={alias}
        placeholder="Alias"
        keyboardType="default"
      />
      <Text style={localStyles.myText}>Nombre completo*</Text>
      <TextInput
        style={localStyles.input}
        onChangeText={(value) => onChange(value, 'fullName')}
        value={fullName}
        placeholder="Nombre completo"
        keyboardType="default"
      />
      <Text style={localStyles.myText}>NIF/NIE*</Text>
      <TextInput
        style={localStyles.input}
        onChangeText={(value) => onChange(value, 'nif')}
        value={nif}
        placeholder="NIF/NIE"
        keyboardType="default"
      />
      <TouchableOpacity style={localStyles.myBoton} onPress={handleCreate}>
        <Text style={localStyles.textBoton}>Crear</Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    width: 250,
    height: 50,
    margin: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 20,
    backgroundColor: 'white',
  },
  myText: {
    fontSize: 18,
  },
  myBoton: {
    marginTop: 25,
    backgroundColor: '#942ADE',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 50,
  },
  textBoton: {
    color: 'white',
    fontSize: 18,
  },
  logoText: {
    marginBottom: 20,
    fontSize: 35,
  },
  box: {
    width: 150,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  registro: {
    marginTop: 0,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  regBoton: {
    color: '#2d2dff',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});
