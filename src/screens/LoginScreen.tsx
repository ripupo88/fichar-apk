import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Api} from '../api/api';

export const LoginScreen = ({
  token,
  registro,
}: {
  token: Function;
  registro: Function;
}) => {
  AsyncStorage.removeItem('token');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const api = new Api();
    const res = await api.login(username, password);
    console.log('req', res);
    if (!res) {
      return;
    } else {
      await AsyncStorage.setItem('token', JSON.stringify(res));
      token(true);
    }
  };

  return (
    <View style={localStyles.container}>
      <Image style={localStyles.img} source={require('../assets/clock.png')} />
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
        style={localStyles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        placeholder="Usuario"
        keyboardType="default"
      />
      <TouchableOpacity style={localStyles.myBoton} onPress={handleLogin}>
        <Text style={localStyles.textBoton}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={localStyles.registro}
        onPress={() => registro(true)}>
        <Text style={localStyles.regBoton}>Registrarse</Text>
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
    borderWidth: 1,
    borderRadius: 100,
    fontSize: 20,
    paddingHorizontal: 10,
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
    borderRadius: 100,
    borderWidth: 1,
  },
  textBoton: {
    color: 'white',
    fontSize: 18,
  },
  regBoton: {
    color: '#2d2dff',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  registro: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
