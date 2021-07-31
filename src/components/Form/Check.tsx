import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styleForm} from './StyleFrom';

type Props = {
  title: string;
  data: string;
  activo: boolean;
  onChange: (v: boolean) => void;
};

export const Check = ({title, data, activo, onChange}: Props) => {
  return (
    <>
      <View style={styleForm().container}>
        <Text style={styleForm().title}>{title}</Text>
        <View style={localStyles.cont}>
          <Text style={styleForm().data}>{data}</Text>
          <CheckBox
            disabled={false}
            value={activo}
            tintColors={{true: 'blue', false: 'Black'}}
            onValueChange={() => onChange(activo)}
          />
        </View>
        <View style={styleForm().separator} />
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  cont: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
