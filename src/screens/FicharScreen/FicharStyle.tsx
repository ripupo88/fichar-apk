import {StyleSheet} from 'react-native';

export const FicharStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#942ADE',
      alignContent: 'space-around',
      alignItems: 'center',
    },
    boton: {backgroundColor: 'red', height: 50, width: 100},
    timerContainer: {
      borderWidth: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      marginVertical: 20,
      flexDirection: 'row',
    },
    botonFichar: {
      backgroundColor: '#bbbbff',
      borderRadius: 0,
      padding: 10,
      borderWidth: 1,
      margin: 10,
    },
    botonCamara: {
      backgroundColor: '#F5A653',
      borderRadius: 0,
      padding: 15,
    },
    botonsCont: {
      flexDirection: 'row',
    },
    botonAtras: {
      alignItems: 'center',
      backgroundColor: '#000',
      borderRadius: 100,
      padding: 5,
      height: 60,
      width: 60,
      margin: 10,
    },
    textoFichar: {color: 'black', fontSize: 30, alignSelf: 'center'},
    textoAtras: {color: '#252525', fontSize: 22},
    botonesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
    },
    iconStyle: {
      color: 'white',
    },
    marker: {
      borderWidth: 2,
      width: 200,
      height: 200,
      borderColor: 'black',
      position: 'absolute',
      alignSelf: 'center',
    },
  });
};
