import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  data: {code: string; token: string; alias: string; cif: string; name: string};
}

export const ListHeader = ({data}: Props) => {
  const navegate = useNavigation();
  const {alias} = data;
  const handleOptions = () => {
    navegate.navigate('EmpresaScreen', {data});
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
    marginVertical: 3,
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
