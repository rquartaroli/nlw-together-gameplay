import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  withoutColor?: boolean;
}

export function Button({ title, withoutColor = false, ...rest }: Props) {
  return (
    <RectButton 
      style={withoutColor ? styles.containerWithoutColor : styles.container} 
      {...rest}
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  )
}