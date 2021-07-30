import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {DateTime} from 'luxon';
import {Header} from '../components/Header';

export const HistoriaScreen = () => {
  useEffect(() => {}, []);

  //   const date = DateTime.now().setLocale('es');

  return (
    <View>
      <Header text={'Notificaciones'} />
      <View style={{...styles.box}}>
        <Text style={styles.text}>
          Richar ha iniciado sesion en un nuevo dispositivo, para evitar un mal
          uso de la aplicaion confirme que acepta este nuevo dipositivo para
          este usuario
        </Text>
        <Text style={styles.time}>5-7-2021 13:50</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>
          Richar ha fichado la salida a las 21:55pm Duración de la jornada: 8:18
          horas{' '}
        </Text>
        <Text style={styles.time}>5-7-2021 13:52</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 8,
    margin: 5,
  },
  text: {
    fontSize: 17,
    color: 'black',
  },
  container: {
    flex: 1,
  },
  time: {
    marginTop: 5,
    alignSelf: 'flex-end',
    color: '#000000aa',
  },
});
