import {StyleSheet} from 'react-native';

export const styleForm = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingHorizontal: 20,
      padding: 7,
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 13,
      // paddingBottom: 5,
    },
    data: {
      color: '#00000088',
      fontWeight: '100',
      fontSize: 15,
      paddingTop: 3,
    },
    separator: {
      alignSelf: 'center',
      borderBottomWidth: 0.2,
      borderBottomColor: '#00000018',
      width: '100%',
      marginTop: 7,
    },
  });
};
