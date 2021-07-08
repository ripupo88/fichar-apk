import React, {useContext, useEffect, useRef, useState} from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StyleSheet} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import {UserData} from '../interfaces/appInteface';

export const FicharScreen = () => {
  const {
    state: {user},
  } = useContext(AuthContext);
  const {trabajando, horaEntrada}: UserData = user;
  const [camara, setCamara] = useState<'front' | 'back'>('back');
  const [fichar, setFichar] = useState(false);
  const [time, setTime] = useState(25299990);
  const myDate = new Date(horaEntrada);
  const {top} = useSafeAreaInsets();

  useInterval(() => {
    setTime((tim) => tim + 1000);
  }, 1000);

  const handleRead = (e: any) => {
    console.log(e.data);
    setFichar(false);
  };

  useEffect(() => {
    console.log();
  }, []);

  if (fichar) {
    return (
      <>
        <View style={LocalStyles.botonesContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={LocalStyles.botonAtras}
            onPress={() => setFichar(false)}>
            <Text style={LocalStyles.textoAtras}>atras</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={LocalStyles.botonAtras}
            onPress={() =>
              setCamara((cam) => (cam === 'back' ? 'front' : 'back'))
            }>
            <Text style={LocalStyles.textoAtras}>Cam</Text>
          </TouchableOpacity>
        </View>
        <QRCodeScanner cameraType={camara} onRead={handleRead} />
      </>
    );
  } else {
    return (
      <View style={{marginTop: top, ...LocalStyles.container}}>
        <View style={LocalStyles.timerContainer}>
          <Text style={styles.title}>
            {myDate.getHours() < 10 && 0}
            {myDate.getHours()}:{myDate.getMinutes() < 10 && 0}
            {myDate.getMinutes()}
          </Text>
          <Text style={styles.title2}>
            {myDate.getSeconds() < 10 && 0}
            {myDate.getSeconds()}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setFichar(true)}
          style={LocalStyles.botonFichar}>
          <Text style={LocalStyles.textoFichar}>Fichar</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
function useInterval(callback: Function, delay: any) {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const LocalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#942ADE',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  boton: {backgroundColor: 'red', height: 50, width: 100},
  timerContainer: {backgroundColor: '#942ADE', flexDirection: 'row'},
  botonFichar: {backgroundColor: '#F5A653', borderRadius: 25, padding: 15},
  botonCamara: {
    backgroundColor: '#F5A653',
    borderRadius: 25,
    padding: 15,
  },
  botonAtras: {
    alignItems: 'center',
    backgroundColor: '#F5A653',
    borderRadius: 25,
    padding: 5,
    height: 55,
    width: 100,
  },
  textoFichar: {color: '#252525', fontSize: 50, alignSelf: 'center'},
  textoAtras: {color: '#252525', fontSize: 22},
  botonesContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});
