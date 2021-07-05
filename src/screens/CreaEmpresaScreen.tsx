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
import {Api, Empresa} from '../api/api';
import {AuthContext} from '../context/AuthContext';

export const CreaEmpresaScreen = () => {
  const [alias, setAlias] = useState('');
  const [raSocial, setRaSocial] = useState('');
  const [cif, setCif] = useState('');
  const navegate = useNavigation();
  const api = new Api();
  const {
    state: {token},
  } = useContext(AuthContext);

  const handleCreate = async () => {
    const data: Empresa = {
      alias,
      name: raSocial,
      cif,
    };
    const res = await api.CreaEmpresa(data, token);
    if (res?.status === 201) {
      setAlias('');
      setRaSocial('');
      setCif('');
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
      <Text style={localStyles.logoText}>Nueva Empresa</Text>
      <Text style={localStyles.myText}>Selecione un alias*</Text>
      <TextInput
        style={localStyles.input}
        onChangeText={setAlias}
        value={alias}
        placeholder="Usuario"
        keyboardType="default"
      />
      <Text style={localStyles.myText}>Razon social*</Text>
      <TextInput
        style={localStyles.input}
        onChangeText={setRaSocial}
        value={raSocial}
        placeholder="Usuario"
        keyboardType="default"
      />
      <Text style={localStyles.myText}>CIF*</Text>
      <TextInput
        style={localStyles.input}
        onChangeText={setCif}
        value={cif}
        placeholder="Usuario"
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
