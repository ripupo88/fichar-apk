import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Api} from '../api/api';

export const LoginScreen = () => {
  useEffect(() => {
    console.log('Tab3Screen effect');
  }, []);

  const api = new Api();
  console.log(api.login('Dailin', 'Ri123456'));
  return (
    <View style={localStyles.container}>
      <Text style={localStyles.logoText}>Control Horario</Text>
      <Text style={localStyles.myText}>Nombre de ususario</Text>
      <TextInput style={localStyles.input} />
      <Text style={localStyles.myText}>Contraseña</Text>
      <TextInput secureTextEntry={true} style={localStyles.input} />
      <TouchableOpacity style={localStyles.myBoton}>
        <Text style={localStyles.textBoton}>Entrar</Text>
      </TouchableOpacity>
    </View>
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
  },
  textBoton: {
    color: 'white',
    fontSize: 18,
  },
  logoText: {
    position: 'absolute',
    top: 40,
    fontSize: 40,
  },
});
