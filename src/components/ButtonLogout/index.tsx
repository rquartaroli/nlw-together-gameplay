import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  withoutColor?: boolean;
}

export function ButtonLogout({ title, withoutColor = false, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={withoutColor ? styles.containerWithoutColor : styles.container} 
      {...rest}
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}