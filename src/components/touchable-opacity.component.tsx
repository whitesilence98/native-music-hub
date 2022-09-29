import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface IProps extends TouchableOpacityProps {
  children?: any;
  flexDirection?: 'row' | 'column';
}

const CustomTouchableOpacity = ({style, flexDirection, ...props}: IProps) => {
  return (
    <TouchableOpacity
      style={[flexDirection === 'row' && styles.row, style]}
      hitSlop={{top: 4, bottom: 4, left: 4, right: 4}}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

CustomTouchableOpacity.defaultProps = {
  flexDirection: 'column',
};

export {CustomTouchableOpacity as TouchableOpacity};
