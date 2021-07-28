import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Check} from '../components/Form/Check';
import {Datos} from '../components/Form/Datos';
import {Header} from '../components/Header';
import {UserData} from '../interfaces/appInteface';

interface Props extends StackScreenProps<any, any> {}

export const UserScreen = ({route}: Props) => {
  const {username, activo, alias, fullName, nif}: UserData = route.params?.user;
  console.log(nif);
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
        />
      </View>
      <View>
        <Header text={'Notificaciones'} />
        <Check
          title={'Entrada:'}
          data={'Al fichar la entrada'}
          activo={activo || false}
        />
        <Check
          title={'Salida:'}
          data={'Al fichar la salida'}
          activo={activo || false}
        />
        <Check
          title={'Legada Tarde:'}
          data={'Entrada fuera de hora'}
          activo={activo || false}
        />
        <Check
          title={'Salida temprano:'}
          data={'Salida antes de hora'}
          activo={activo || false}
        />
        <Check
          title={'Nuevo dispositivo:'}
          data={'Al cambiar de móvil'}
          activo={activo || false}
        />
      </View>
    </ScrollView>
  );
};
