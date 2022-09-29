import React from 'react';
import {StyleSheet, View} from 'react-native';

import Styles from '@styles';
import {useTheme} from '@context/theme.context';

interface IProps {
  style?: any;
  orientation?: 'horizontal' | 'vertical';
}

const Divider = ({orientation, style}: IProps) => {
  const {
    theme: {
      palette: {divider},
    },
  } = useTheme();

  return (
    <View
      style={[
        {backgroundColor: divider},
        orientation === 'horizontal' && styles.horizontal,
        orientation === 'vertical' && styles.vertical,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
  },
  vertical: {
    width: 1,
    height: '100%',
  },
});

Divider.defaultProps = {
  orientation: 'horizontal',
};

export {Divider};
