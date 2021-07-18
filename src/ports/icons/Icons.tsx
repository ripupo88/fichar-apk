import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function icons(name: string, size: number = 20) {
  return <Icon size={size} name={name} />;
}
