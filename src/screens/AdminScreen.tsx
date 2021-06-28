import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Api} from '../api/api';

export const AdminScreen = () => {
  const api = new Api();

  return (
    <View style={localstyle.constainer}>
      <ScrollView>
        <View>
          <Text style={localstyle.title1}> Tus empresas </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const localstyle = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  title1: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
});