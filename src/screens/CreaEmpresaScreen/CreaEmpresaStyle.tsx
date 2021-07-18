import {StyleSheet} from 'react-native';

export const creaEmpresaStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
    },
    myBoton: {
      marginTop: 25,
      backgroundColor: '#942ADE',
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 15,
      borderWidth: 1,
      marginBottom: 50,
    },
    textBoton: {
      color: 'white',
      fontSize: 18,
    },
    logoText: {
      marginBottom: 20,
      fontSize: 35,
    },
    box: {
      width: 150,
      flexDirection: 'row',
      alignContent: 'space-between',
    },
    registro: {
      marginTop: 0,
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    regBoton: {
      color: '#2d2dff',
      fontSize: 13,
      textDecorationLine: 'underline',
    },
  });
};
