import React from 'react';
import {StyleSheet} from 'react-native';

import Styles from '@styles';

import {TouchableOpacity} from './touchable-opacity.component';
import {Image} from './image.component';

interface IProps {
  checked?: any;
  onPress?: any;
  style?: any;
}

const Checkbox = ({style, checked, onPress}: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.root, style]}>
      {checked && (
        <Image source={require('@assets/icons/checkbox-checked.png')} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 18,
    height: 18,
    borderRadius: Styles.radius.button,
    borderWidth: 1,
    borderColor: Styles.borderColor,
    backgroundColor: Styles.backgroundPaper,
  },
});

export {Checkbox};
