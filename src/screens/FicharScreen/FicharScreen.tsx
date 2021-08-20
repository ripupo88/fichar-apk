import {useNavigation} from '@react-navigation/native';
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../../theme/appTheme';
// import {DateTime} from 'luxon';
import {FicharHook} from './FicharHook';
import {FicharStyle} from './FicharStyle';

export const FicharScreen = () => {
  const {time, top, setFichar} = FicharHook();
  const navigator = useNavigation();

  return (
    <>
      <View style={{marginTop: top, ...FicharStyle().container}}>
        <View style={FicharStyle().timerContainer}>
          <Text style={styles.title}>
            {time.getHours() < 10 && 0}
            {time.getHours()}:{time.getMinutes() < 10 && 0}
            {time.getMinutes()}
          </Text>
          <Text style={styles.title2}>
            {time.getSeconds() < 10 && 0}
            {time.getSeconds()}
          </Text>
        </View>
        <View style={FicharStyle().botonsCont}>
          <TouchableOpacity
            onPress={() => setFichar(true)}
            style={FicharStyle().botonFichar}>
            <Text style={FicharStyle().textoFichar}>Pausa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigator.navigate('QRScanScreen')}
            style={FicharStyle().botonFichar}>
            <Text style={FicharStyle().textoFichar}>Fichar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
