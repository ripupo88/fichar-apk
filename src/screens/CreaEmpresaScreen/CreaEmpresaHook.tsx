// Core imports
import {useContext} from 'react';
import {Alert, Keyboard} from 'react-native';
//3rd party imports
import {useNavigation} from '@react-navigation/native';
//Local imports
import {AuthContext} from '../../context/AuthContext';
import {useForm} from '../../hooks/useForm';
import {Api, Empresa} from '../../ports/api/api';

export const CreaEmpresaHook = () => {
  const {alias, raSocial, cif, onChange} = useForm({
    alias: '',
    raSocial: '',
    cif: '',
  });

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
      onChange('', 'alias');
      onChange('', 'raSocial');
      onChange('', 'cif');
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
    raSocial,
    cif,
    handleCreate,
    onChange,
  };
};
