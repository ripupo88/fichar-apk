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

export const Turno = ({title, data, activo, onChange}: Props) => {
  return (
    <>
      <View style={styleForm().container}>
        <Text style={styleForm().title}>{title}</Text>
        <Text style={localStyles.text}>{data}</Text>
        <View style={localStyles.cont}>
          <View style={localStyles.cont}>
            <Text style={localStyles.text}>{'L'}</Text>
            <CheckBox
              disabled={false}
              value={activo}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={() => onChange(activo)}
            />
          </View>
          <View style={localStyles.cont}>
            <Text style={localStyles.text}>{'M'}</Text>
            <CheckBox
              disabled={false}
              value={activo}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={() => onChange(activo)}
            />
          </View>
          <View style={localStyles.cont}>
            <Text style={localStyles.text}>{'X'}</Text>
            <CheckBox
              disabled={false}
              value={activo}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={() => onChange(activo)}
            />
          </View>
          <View style={localStyles.cont}>
            <Text style={localStyles.text}>{'J'}</Text>
            <CheckBox
              disabled={false}
              value={activo}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={() => onChange(activo)}
            />
          </View>
          <View style={localStyles.cont}>
            <Text style={localStyles.text}>{'V'}</Text>
            <CheckBox
              disabled={false}
              value={activo}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={() => onChange(activo)}
            />
          </View>
          <View style={localStyles.cont}>
            <Text style={localStyles.text}>{'S'}</Text>
            <CheckBox
              disabled={false}
              value={activo}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={() => onChange(activo)}
            />
          </View>
          <View style={localStyles.cont}>
            <Text style={localStyles.text}>{'D'}</Text>
            <CheckBox
              disabled={false}
              value={activo}
              tintColors={{true: 'blue', false: 'Black'}}
              onValueChange={() => onChange(activo)}
            />
          </View>
        </View>
        <View style={styleForm().separator} />
      </View>
    </>
  );
};

const localStyles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#00000088',
    fontWeight: '100',
    fontSize: 18,
    paddingTop: 5,
  },
});
