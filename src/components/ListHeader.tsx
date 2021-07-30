import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Download} from '../ports/download/downloadFile';

interface Props {
  data: {alias: string; code: string; token: string; name: string; cif: string};
}

export const ListHeader = ({data}: Props) => {
  const navegate = useNavigation();
  const {alias, code, token} = data;
  const handleOptions = () => {
    navegate.navigate('EmpresaScreen', {data});

    Download(token, code);
  };
  return (
    <View style={localstyles.titleCont}>
      <Text style={localstyles.title1}> {alias} </Text>
      <TouchableOpacity onPress={handleOptions}>
        <Icon size={20} style={localstyles.icon} name={'settings-outline'} />
      </TouchableOpacity>
    </View>
  );
};

const localstyles = StyleSheet.create({
  title1: {
    fontSize: 20,
  },
  titleCont: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderBottomColor: '#000000aa',
    marginTop: 8,
    backgroundColor: 'white',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
