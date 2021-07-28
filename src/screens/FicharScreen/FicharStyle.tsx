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
      backgroundColor: '#F5A653',
      borderRadius: 25,
      padding: 5,
      height: 55,
      width: 100,
    },
    textoFichar: {color: 'black', fontSize: 30, alignSelf: 'center'},
    textoAtras: {color: '#252525', fontSize: 22},
    botonesContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  });
};
