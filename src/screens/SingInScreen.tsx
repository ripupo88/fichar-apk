import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Api, Data} from '../api/api';

export const SingInScreen = ({registro}: {registro: Function}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [user, setUser] = useState('');
  const [code, setCode] = useState('');
  const api = new Api();

  const handleRegsitro = async () => {
    const role = isAdmin ? 'ADMIN' : 'USER';
    const data: Data = {
      username: user,
      password: password,
      role,
      code,
    };
    const res = await api.Registro(data);
    console.log(res);
    if (res?.status === 201) {
      registro(false);
    }
  };

  const setToggleCheckBox = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <ScrollView>
      <View style={localStyles.container}>
        <Text style={localStyles.logoText}>Nuevo usuario</Text>
        <Text style={localStyles.myText}>Selecione un ususario*</Text>
        <TextInput
          style={localStyles.input}
          onChangeText={setUser}
          value={user}
          placeholder="Usuario"
          keyboardType="default"
        />
        <Text style={localStyles.myText}>Selecione una contraseña*</Text>
        <TextInput
          style={localStyles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholder="Usuario"
          keyboardType="default"
        />
        <Text style={localStyles.myText}>Repita la contraseña*</Text>
        <TextInput
          secureTextEntry={true}
          style={localStyles.input}
          onChangeText={setPassword2}
          value={password2}
          placeholder="Usuario"
          keyboardType="default"
        />
        <Text style={localStyles.myText}>Código de empresa*</Text>
        <TextInput
          style={localStyles.input}
          onChangeText={setCode}
          value={code}
          placeholder="Usuario"
          keyboardType="numeric"
        />
        <View style={localStyles.box}>
          <Text style={localStyles.myText}>¿Eres ADMIN?</Text>
          <CheckBox
            disabled={false}
            value={isAdmin}
            tintColors={{true: 'blue', false: 'white'}}
            onValueChange={setToggleCheckBox}
          />
        </View>

        <TouchableOpacity style={localStyles.myBoton} onPress={handleRegsitro}>
          <Text style={localStyles.textBoton}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={localStyles.registro}
          onPress={() => registro(false)}>
          <Text style={localStyles.regBoton}>¿Ya tienes cuenta?</Text>
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
