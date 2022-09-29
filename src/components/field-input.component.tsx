import React from 'react';

import {StyleSheet, View} from 'react-native';

import Styles from '@styles';

import {Text} from './text';
import {TextInput, ITextInputProps} from './text-input';

interface IProps {
  label?: string;
  inputProps?: ITextInputProps;
  title?: string;
  gutterBottom?: boolean;
  style?: any;
}

const FieldInput = ({label, style, inputProps, gutterBottom}: IProps) => {
  return (
    <>
      <View style={[styles.root, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...inputProps} />
      </View>
      {gutterBottom && <View style={styles.divider} />}
    </>
  );
};

FieldInput.defaultProps = {
  inputProps: {},
};

const styles = StyleSheet.create({
  label: {
    marginBottom: Styles.gutter.component,
  },
  divider: {
    height: Styles.gutter.container,
  },
  root: {width: '100%'},
});

export {FieldInput};
