import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={localStyles.container}>
      <Text style={localStyles.title}>Cargando informacion...</Text>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f82ADE',
  },
  title: {
    fontSize: 20,
  },
});
