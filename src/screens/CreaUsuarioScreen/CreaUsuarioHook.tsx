import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import {Alert, Keyboard} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {useForm} from '../../hooks/useForm';
import {Api, Usuario} from '../../ports/api/api';

export const CreaUsuarioHook = (username: string) => {
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
      username,
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
  return {
    alias,
    fullName,
    nif,
    handleCreate,
    onChange,
  };
};
