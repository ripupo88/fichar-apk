import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Check} from '../components/Form/Check';
import {Datos} from '../components/Form/Datos';
import {Turno} from '../components/Form/turno';
import {Header} from '../components/Header';
import {Download} from '../ports/download/downloadFile';

interface Props extends StackScreenProps<any, any> {}

export const EmpresaScreen = ({route}: Props) => {
  console.log(route.params);
  const {code, alias, name, cif, token} = route.params?.data;
  return (
    <ScrollView>
      <Header text={alias} />
      <Datos title={'Nombre'} data={name} />
      <Datos title={'CIF'} data={cif} />
      <Datos title={'Código'} data={code} />
      <Header text={'Mostrar'} />
      <Check
        title={'Trabajando:'}
        data={'En jornada laboral'}
        activo={false}
        onChange={() => console.log('object')}
      />
      <Check
        title={'Empleados:'}
        data={'Trabajadores actuales'}
        activo={true}
        onChange={() => console.log('object')}
      />
      <Check
        title={'Historico:'}
        data={'Incluye antiguos empleados'}
        activo={false}
        onChange={() => console.log('object')}
      />
      <Header text={'Turnos'} />
      <Turno
        title={'Mañana'}
        data={'5:30am - 13:30pm'}
        activo={true}
        onChange={() => console.log('s')}
      />
      <Turno
        title={'Tarde'}
        data={'13:30am - 21:30pm'}
        activo={true}
        onChange={() => console.log('s')}
      />
      <TouchableOpacity onPress={() => Download(token, code)}>
        <Header text={'Descargar QR'} />
      </TouchableOpacity>
    </ScrollView>
  );
};
