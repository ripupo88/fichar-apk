import React from 'react';
import {Text, View} from 'react-native';
import {styleForm} from './StyleFrom';

type Props = {
  title: string;
  data: string;
};

export const Datos = ({title, data}: Props) => {
  return (
    <>
      <View style={styleForm().container}>
        <Text style={styleForm().title}>{title}</Text>
        <Text style={styleForm().data}>{data}</Text>
        <View style={styleForm().separator} />
      </View>
    </>
  );
};
