import {StyleSheet} from 'react-native';

export const creaUsuarioStyle = () => {
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
  });
};
