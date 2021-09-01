import {useNavigation} from '@react-navigation/native';
// import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {UserData} from '../interfaces/appInteface';

interface Props {
  user: UserData;
}

export const ItemView = ({user}: Props) => {
  const navigator = useNavigation();
  const {username, trabajando, horaEntrada, horaSalida, alias, editable} = user;
  const now = new Date();
  const myDate = new Date(horaEntrada || 0);
  const outTime = new Date(horaSalida || 0);
  const [time, setTime] = useState(
    horaSalida
      ? horaEntrada
        ? new Date(outTime.getTime() - myDate.getTime())
        : new Date(0)
      : horaEntrada
      ? new Date(now.getTime() - myDate.getTime())
      : new Date(0),
  );
  useInterval(() => {
    if (trabajando) {
      setTime((tim: any) => new Date(tim.getTime() + 1000));
    }
  }, 1000);

  const handleNav = () => {
    editable
      ? navigator.navigate('CreaUsuarioScreen', {username})
      : navigator.navigate('UserScreen', {user});
  };
  let name: string = '';
  alias ? (name = alias) : (name = username);
  let timeEntra;
  let timeSalida;
  let fecha;

  const entrada = new Date(horaEntrada!);
  const salida = new Date(horaSalida!);

  let hora: string | number = entrada.getHours();
  if (hora < 10) {
    hora = '0' + hora;
  }
  let minutes: string | number = entrada.getMinutes();

  let horaSal: string | number = salida.getHours();
  if (horaSal < 10) {
    horaSal = '0' + horaSal;
  }
  let minutesSal: string | number = salida.getMinutes();

  if (minutesSal < 10) {
    minutesSal = '0' + minutesSal;
  }

  timeEntra = hora + ':' + minutes;
  timeSalida = horaSal + ':' + minutesSal;
  fecha =
    entrada.getDate() +
    '-' +
    (entrada.getMonth() + 1) +
    '-' +
    entrada.getFullYear();

  return (
    <View style={localstyles.mainContainer}>
      <Image
        style={localstyles.avatar}
        source={{
          uri: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
        }}
      />
      <View style={localstyles.secCont}>
        <View style={localstyles.container}>
          <View style={localstyles.newUserCont}>
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
          <Text style={localstyles.text2}>
            {horaEntrada ? fecha : '__-__-____'}
          </Text>
        </View>
        <View style={localstyles.container}>
          <Text style={localstyles.TextBlind}>entrada</Text>
          <Text style={localstyles.TextBlind}>salida</Text>
        </View>
        <View style={localstyles.container}>
          <Text style={localstyles.text3}>
            {horaEntrada ? timeEntra : '___:___'}
          </Text>
          <View
            style={[
              localstyles.timerContainer,
              {backgroundColor: time.getHours() > 8 ? '#ff0000' : '#55ff55'},
            ]}>
            <Text style={localstyles.text4}>
              {time.getHours() < 10 && 0}
              {time.getHours()}:{time.getMinutes() < 10 && 0}
              {time.getMinutes()}
            </Text>
            <Text style={localstyles.TextBlind}>
              {time.getSeconds() < 10 && 0}
              {time.getSeconds()}
            </Text>
          </View>
          <Text style={localstyles.text3}>
            {horaSalida ? timeSalida : '___:___'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const localstyles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'green',
    flexDirection: 'row',
    paddingHorizontal: 3,
    borderRadius: 5,
  },
  newUserCont: {
    flexDirection: 'row',
  },
  TextBlind: {
    color: '#00000077',
  },
  secCont: {flex: 1, marginHorizontal: 7},
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    margin: 4,
    shadowRadius: 5,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.7,

    elevation: 10,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 5,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
  },
  text3: {
    fontSize: 16,
    fontWeight: '800',
  },
  text4: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 13,
    marginRight: -5,
    paddingHorizontal: 4,
    backgroundColor: '#CDBFF0',
    borderRadius: 10,
  },
  container: {
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingTop: 2,
    marginRight: 7,
  },
});

function useInterval(callback: Function, delay: any) {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}
