import React from 'react';
import {StyleSheet, TouchableOpacityProps} from 'react-native';

import {Image, TouchableOpacity} from '@components';
import Styles from '@styles';
import {useTheme} from '@context/theme.context';

interface IProps extends TouchableOpacityProps {
  source?: any;
  iconStyle?: any;
}

const IconButton = ({source, style, iconStyle, ...props}: IProps) => {
  const {
    theme: {
      palette: {background, text},
    },
  } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.root, {backgroundColor: background.paper}, style]}
      {...props}>
      <Image source={source} style={[{tintColor: text.icon}, iconStyle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Styles.radius.button,
  },
});

export {IconButton};
