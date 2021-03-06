import React, {useContext, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {LoginForm} from '../interfaces/appInteface';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthContext';
import {Data} from '../ports/api/api';

interface Props extends StackScreenProps<any, any> {}

export const SingInScreen = ({navigation}: Props) => {
  const {
    SingUp,
    gotError,
    state: {error},
  } = useContext(AuthContext);
  const {isAdmin, password, password2, user, code, onChange} =
    useForm<LoginForm>({
      isAdmin: false,
      password: '',
      password2: '',
      user: '',
      code: '',
    });

  useEffect(() => {
    if (error !== '') {
      Alert.alert('Ha ocurrido un error', error, [
        {
          text: 'ok',
          onPress: () => gotError(''),
        },
      ]);
    }
  }, [error, gotError]);

  const handleRegsitro = async () => {
    if (password !== password2) {
      gotError('la contraseña debe ser igual');
      return;
    }
    const role = isAdmin ? 'ADMIN' : 'USER';
    let data: Data = {
      username: user,
      password: password,
      notifToken: '',
      role,
    };
    if (!isAdmin) {
      data = {...data, code};
    }
    SingUp(data);
  };

  const setToggleCheckBox = () => {
    onChange(!isAdmin, 'isAdmin');
  };

  return (
    <View style={localStyles.mainContainer}>
      <ScrollView
        style={localStyles.scrollStyle}
        showsVerticalScrollIndicator={false}>
        <View style={localStyles.container}>
          <Text style={localStyles.logoText}>Nuevo usuario</Text>
          <Text style={localStyles.myText}>Selecione un ususario*</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value, 'user')}
            value={user}
            placeholder="Usuario"
            keyboardType="default"
          />
          <Text style={localStyles.myText}>Selecione una contraseña*</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(value) => onChange(value, 'password')}
            value={password}
            placeholder="Contraseña"
            keyboardType="default"
          />
          <Text style={localStyles.myText}>Repita la contraseña*</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(value) => onChange(value, 'password2')}
            value={password2}
            placeholder="Contraseña"
            keyboardType="default"
          />
          {!isAdmin && (
            <>
              <Text style={localStyles.myText}>Código de empresa*</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => onChange(value, 'code')}
                value={code}
                placeholder="Código"
                keyboardType="numeric"
              />
            </>
          )}
          <View style={localStyles.box}>
            <Text style={localStyles.myText}>¿Eres ADMIN?</Text>
            <CheckBox
              disabled={false}
              value={isAdmin}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={setToggleCheckBox}
            />
          </View>

          <TouchableOpacity
            style={localStyles.myBoton}
            onPress={handleRegsitro}>
            <Text style={localStyles.textBoton}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={localStyles.registro}
            onPress={() => navigation.replace('LoginScreen')}>
            <Text style={localStyles.regBoton}>¿Ya tienes cuenta?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginBottom: 20,
  },
  textBoton: {
    color: 'white',
    fontSize: 18,
  },
  logoText: {
    marginVertical: 25,
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
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  scrollStyle: {
    width: '100%',
  },
});
