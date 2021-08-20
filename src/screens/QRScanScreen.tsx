import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {FicharHook} from './FicharScreen/FicharHook';
import {FicharStyle} from './FicharScreen/FicharStyle';

export const QRScanScreen = () => {
  const {camara, handleRead, setCamara, setFichar} = FicharHook();

  return (
    <>
      <QRCodeScanner
        cameraType={camara}
        onRead={handleRead}
        topContent={
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
        }
      />
    </>
  );
};

const styles = StyleSheet.create({});
