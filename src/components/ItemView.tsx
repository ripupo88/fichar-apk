import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {UserData} from '../interfaces/appInteface';

interface Props extends StackScreenProps<any, any> {
  user?: UserData;
}

export const ItemView = ({user}: Props) => {
  const navigator = useNavigation();
  const {username, trabajando, horaEntrada, alias, editable} = user;
  console.log(user);
  const handleNav = () => {
    editable
      ? navigator.navigate('CreaUsuarioScreen', {username})
      : navigator.navigate('UserScreen', {user});
  };
  let name: string = '';
  alias ? (name = alias) : (name = username);
  let time;
  let fecha;
  if (trabajando) {
    const Xmas95 = new Date(horaEntrada!);
    let hora: string | number = Xmas95.getHours();
    if (hora < 10) {
      hora = '0' + hora;
    }
    let minutes: string | number = Xmas95.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    time = hora + ':' + minutes;
    fecha =
      Xmas95.getDate() +
      '-' +
      (Xmas95.getMonth() + 1) +
      '-' +
      Xmas95.getFullYear();
  }

  return (
    <View style={localstyles.container}>
      <View style={localstyles.subContainer}>
        {editable && (
          <Icon
            style={localstyles.icon}
            size={18}
            name={'information-circle-outline'}
          />
        )}
        <TouchableOpacity onPress={handleNav}>
          <Text style={localstyles.text}>{name}</Text>
        </TouchableOpacity>
      </View>
      <View style={localstyles.subContainer}>
        <Text style={localstyles.text2}>{fecha}</Text>
        <Text style={localstyles.text3}>{time}</Text>
      </View>
    </View>
  );
};

const localstyles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 6,
  },
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    marginRight: 8,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  subContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 2,
    marginRight: 7,
  },
});
