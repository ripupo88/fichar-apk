import React, {useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {password, username, onChange} = useForm({username: '', password: ''});
  const {logIn} = useContext(AuthContext);

  const handleLogin = async () => {
    logIn(username, password);
  };

  return (
    <View style={localStyles.container}>
      <Image style={localStyles.img} source={require('../assets/clock.png')} />
      <Text style={localStyles.myText}>Nombre de ususario</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChange(value, 'username')}
        value={username}
        placeholder="Usuario"
        keyboardType="default"
      />
      <Text style={localStyles.myText}>Contraseña</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(value) => onChange(value, 'password')}
        value={password}
        placeholder="Contraseña"
        keyboardType="default"
      />
      <TouchableOpacity style={localStyles.myBoton} onPress={handleLogin}>
        <Text style={localStyles.textBoton}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={localStyles.registro}
        onPress={() => navigation.replace('SingInScreen')}>
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
