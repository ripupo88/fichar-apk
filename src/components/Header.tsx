import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text: string;
}

export const Header = ({text}: Props) => {
  return (
    <View style={localstyles.container}>
      <Text style={localstyles.headerText}>{text}</Text>
    </View>
  );
};

const localstyles = StyleSheet.create({
  container: {
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: '#00000022',
  },
  headerText: {
    fontSize: 25,
  },
});
