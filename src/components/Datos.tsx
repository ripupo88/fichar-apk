import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';

type Props = {
  title: string;
  data: string;
};

export const Datos = ({title, data}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
      <View style={styles.separator} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  data: {
    color: '#00000077',
    fontWeight: '100',
    fontSize: 15,
  },
  separator: {
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#00000066',
    width: '80%',
  },
});
