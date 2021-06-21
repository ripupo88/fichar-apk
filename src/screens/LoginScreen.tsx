import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Api} from '../api/api';

export const LoginScreen = ({token}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log('Tab3Screen effect');
  }, []);

  const handleLogin = async () => {
    const api = new Api();
    const res = await api.login(username, password);
    AsyncStorage.setItem('token', JSON.stringify(res.data));
  };

  return (
    <View style={localStyles.container}>
      <Text style={localStyles.logoText}>Control Horario</Text>
      <Text style={localStyles.myText}>Nombre de ususario</Text>
      <TextInput
        style={localStyles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Usuario"
        keyboardType="default"
      />
      <Text style={localStyles.myText}>Contraseña</Text>
      <TextInput
        secureTextEntry={true}
        style={localStyles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Usuario"
        keyboardType="default"
      />
      <TouchableOpacity style={localStyles.myBoton} onPress={handleLogin}>
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
