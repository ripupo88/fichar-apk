import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styleForm} from './StyleFrom';

type Props = {
  title: string;
  data: string;
  activo: boolean;
};

export const Check = ({title, data, activo}: Props) => {
  const [checked, setChecked] = useState(activo);

  return (
    <>
      <View style={styleForm().container}>
        <Text style={styleForm().title}>{title}</Text>
        <View style={localStyles.cont}>
          <Text style={styleForm().data}>{data}</Text>
          <CheckBox
            disabled={false}
            value={checked}
            tintColors={{true: 'blue', false: 'Black'}}
            onValueChange={() => setChecked((it) => !it)}
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
