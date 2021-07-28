import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {styles} from '../../theme/appTheme';
// import {DateTime} from 'luxon';
import {FicharHook} from './FicharHook';
import {FicharStyle} from './FicharStyle';

export const FicharScreen = () => {
  const {
    camara,
    fichar,
    time,
    top,
    handleRead,
    setCamara,
    setFichar,
  } = FicharHook();

  if (fichar) {
    return (
      <>
        <View style={FicharStyle().botonesContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={FicharStyle().botonAtras}
            onPress={() => setFichar(false)}>
            <Text style={FicharStyle().textoAtras}>atras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={FicharStyle().botonAtras}
            onPress={() =>
              setCamara((cam) => (cam === 'back' ? 'front' : 'back'))
            }>
            <Text style={FicharStyle().textoAtras}>Cam</Text>
          </TouchableOpacity>
        </View>
        <QRCodeScanner cameraType={camara} onRead={handleRead} />
      </>
    );
  } else {
    return (
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
            onPress={() => setFichar(true)}
            style={FicharStyle().botonFichar}>
            <Text style={FicharStyle().textoFichar}>Fichar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
