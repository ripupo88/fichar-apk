import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {UserData} from '../interfaces/appInteface';

type Props = {
  user: UserData;
};

export const ItemView = ({user}: Props) => {
  const {username, trabajando, horaEntrada, alias} = user;
  let name: string = '';
  alias ? (name = alias) : (name = username);
  let time;
  let fecha;
  if (trabajando) {
    const Xmas95 = new Date(horaEntrada!);
    time = Xmas95.getUTCHours() + 1 + ':' + Xmas95.getMinutes();
    fecha =
      Xmas95.getDate() + '-' + Xmas95.getMonth() + '-' + Xmas95.getFullYear();
  }
  return (
    <View
      style={
        trabajando
          ? {...localstyles.container, ...localstyles.trabajando}
          : {...localstyles.container}
      }>
      <Text style={localstyles.text}>{name}</Text>
      <View style={localstyles.subContainer}>
        <Text style={localstyles.text2}>{fecha}</Text>
        <Text style={localstyles.text3}>{time}</Text>
        <Icon
          style={localstyles.icon}
          size={18}
          name={'information-circle-outline'}
        />
      </View>
    </View>
  );
};

const localstyles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  trabajando: {backgroundColor: 'white'},
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    marginRight: 8,
  },
  container: {
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
    marginLeft: 7,
  },
});
