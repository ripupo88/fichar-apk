import React from 'react';
import {KeyboardTypeOptions, StyleSheet, Text, TextInput} from 'react-native';

interface Props {
  onChangeText: (value: string) => void;
  value: string;
  title: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
}

export const FormTextInput = ({
  onChangeText,
  value,
  title,
  placeholder = '',
  keyboardType = 'default',
}: Props) => {
  return (
    <>
      <Text style={localstyles.myText}>{title}</Text>
      <TextInput
        style={localstyles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </>
  );
};

const localstyles = StyleSheet.create({
  input: {
    width: 250,
    height: 50,
    margin: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 20,
    backgroundColor: 'white',
  },
  myText: {
    fontSize: 18,
  },
});
