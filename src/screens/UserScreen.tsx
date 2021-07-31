import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Check} from '../components/Form/Check';
import {Datos} from '../components/Form/Datos';
import {Header} from '../components/Header';
import {useForm} from '../hooks/useForm';
import {useAdminSocket} from '../hooks/useSocket';
import {UserData} from '../interfaces/appInteface';

interface Props extends StackScreenProps<any, any> {}

export const UserScreen = ({route}: Props) => {
  const {
    username,
    activo,
    alias,
    fullName,
    nif,
    notif,
    _id,
  }: UserData = route.params?.user;

  const {
    entrada,
    llegaTarde,
    nuevoDisp,
    salida,
    salidaTemprano,
    onChange,
    form,
  } = useForm(notif);

  const {wsSetUser} = useAdminSocket();
  useEffect(() => {
    wsSetUser(form, _id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <ScrollView>
      <View>
        <Header text={alias || ''} />
        <Datos title={'Nombre'} data={fullName || ''} />
        <Datos title={'DNI/NIE:'} data={nif || ''} />
        <Datos title={'Nombre de Usuario:'} data={username || ''} />
        <Check
          title={'Deshabilitar usuario:'}
          data={'Usuario activo'}
          activo={activo || false}
          onChange={() => console.log('object')}
        />
      </View>
      <View>
        <Header text={'Notificaciones'} />
        <Check
          title={'Entrada:'}
          data={'Al fichar la entrada'}
          activo={entrada}
          onChange={(v) => onChange(!v, 'entrada')}
        />
        <Check
          title={'Salida:'}
          data={'Al fichar la salida'}
          activo={salida}
          onChange={(v) => onChange(!v, 'salida')}
        />
        <Check
          title={'Legada Tarde:'}
          data={'Entrada fuera de hora'}
          activo={llegaTarde}
          onChange={(v) => onChange(!v, 'llegaTarde')}
        />
        <Check
          title={'Salida temprano:'}
          data={'Salida antes de hora'}
          activo={salidaTemprano}
          onChange={(v) => onChange(!v, 'salidaTemprano')}
        />
        <Check
          title={'Nuevo dispositivo:'}
          data={'Al cambiar de móvil'}
          activo={nuevoDisp}
          onChange={(v) => onChange(!v, 'nuevoDisp')}
        />
      </View>
    </ScrollView>
  );
};
