import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/Ionicons';
import {FicharHook} from './FicharScreen/FicharHook';
import {FicharStyle} from './FicharScreen/FicharStyle';

export const QRScanScreen = () => {
  const {camara, navigator, handleRead, setCamara} = FicharHook();

  const {width, height} = Dimensions.get('window');

  return (
    <>
      <QRCodeScanner
        cameraStyle={{width: width, height: height}}
        cameraType={camara}
        onRead={handleRead}
        showMarker
        customMarker={
          <View style={[FicharStyle().botonesContainer, {width, height}]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={FicharStyle().botonAtras}
              onPress={() => navigator.goBack()}>
              <Icon
                style={FicharStyle().iconStyle}
                size={45}
                name={'arrow-back-outline'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={FicharStyle().botonAtras}
              onPress={() =>
                setCamara((cam) => (cam === 'back' ? 'front' : 'back'))
              }>
              <Icon
                style={FicharStyle().iconStyle}
                size={45}
                name={'camera-reverse'}
              />
            </TouchableOpacity>
            <View style={[FicharStyle().marker, {left: width / 2 - 100}]} />
          </View>
        }
      />
    </>
  );
};

// const styles = StyleSheet.create({});
