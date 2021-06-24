import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Api, Data} from '../api/api';

export const CreaEmpresaScreen = ({registro}: {registro: Function}) => {
  const [alias, setAlias] = useState('');
  const [raSocial, setraSocial] = useState('');
  const [cif, setCif] = useState('');
  const api = new Api();

  const handleRegsitro = async () => {
    const data: any = {
      alias: alias,
      nombre: raSocial,
      cif,
    };
    const res = await api.Registro(data);
    console.log(res);
    if (res?.status === 201) {
      registro(false);
    }
  };

  return (
    <ScrollView>
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
          secureTextEntry={true}
          onChangeText={setraSocial}
          value={raSocial}
          placeholder="Usuario"
          keyboardType="default"
        />
        <Text style={localStyles.myText}>CIF*</Text>
        <TextInput
          secureTextEntry={true}
          style={localStyles.input}
          onChangeText={setCif}
          value={cif}
          placeholder="Usuario"
          keyboardType="default"
        />
        <TouchableOpacity style={localStyles.myBoton} onPress={handleRegsitro}>
          <Text style={localStyles.textBoton}>Crear</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f82ADE',
  },
  input: {
    width: 250,
    height: 50,
    margin: 12,
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
