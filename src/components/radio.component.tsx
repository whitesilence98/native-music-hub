import React from 'react';
import {StyleSheet, View} from 'react-native';

import Styles from '@styles';

import {TouchableOpacity} from './touchable-opacity.component';
import {Image} from './image.component';

interface IProps {
  checked?: any;
  onPress?: any;
  style?: any;
}

const Radio = ({style, checked, onPress}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.root, checked && styles.checked, style]}>
      {checked && <View style={styles.checkedIcon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Styles.borderColor,
    backgroundColor: Styles.backgroundPaper,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: Styles.palette.primary.main,
  },
  checkedIcon: {
    backgroundColor: Styles.palette.primary.main,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export {Radio};
