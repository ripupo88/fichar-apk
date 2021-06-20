import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const SingInScreen = () => {
  const [isAdmin, setIsAdmin] = useState(true);

  const setToggleCheckBox = () => {
    setIsAdmin(!isAdmin);
  };

  useEffect(() => {
    console.log('Tab3Screen effect');
  }, []);

  return (
    <ScrollView>
      <View style={localStyles.container}>
        <Text style={localStyles.logoText}>Nuevo usuario</Text>
        <Text style={localStyles.myText}>Selecione un ususario*</Text>
        <TextInput style={localStyles.input} />
        <Text style={localStyles.myText}>Selecione una contraseña*</Text>
        <TextInput secureTextEntry={true} style={localStyles.input} />
        <Text style={localStyles.myText}>Repita la contraseña*</Text>
        <TextInput secureTextEntry={true} style={localStyles.input} />
        <Text style={localStyles.myText}>Código de empresa*</Text>
        <TextInput style={localStyles.input} />
        <View style={localStyles.box}>
          <Text style={localStyles.myText}>¿Eres ADMIN?</Text>
          <CheckBox
            disabled={false}
            value={isAdmin}
            tintColors={{true: 'blue', false: 'white'}}
            onValueChange={setToggleCheckBox}
          />
        </View>

        <TouchableOpacity style={localStyles.myBoton}>
          <Text style={localStyles.textBoton}>Registrarse</Text>
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
});
