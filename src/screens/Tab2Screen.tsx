import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {DateTime} from 'luxon';

export const Tab2Screen = () => {
  useEffect(() => {}, []);

  //   const date = DateTime.now().setLocale('es');
  console.log(
    DateTime.now().setLocale('es').toLocaleString(DateTime.DATE_FULL),
  );

  return (
    <View>
      <View style={{...styles.box}}>
        <Text style={styles.text}>Has Fichado la entrada 13:26pm</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>
          Has Fichado la salida a las 21:55pm Duración de la jornada: 8:18 horas{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignSelf: 'flex-end',
    backgroundColor: '#942ADE',
    width: 250,
    borderRadius: 10,
    padding: 4,
    margin: 3,
  },
  text: {
    color: 'white',
  },
  container: {
    flex: 1,
  },
});
