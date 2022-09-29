import React from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';

interface IView extends ViewProps {
  flexDirection?: 'row' | 'column';
  alignItems?: 'flex-end';
  justifyContent?: 'flex-end';
  children?: any;
}

const CustomView = ({
  style,
  flexDirection,
  alignItems,
  justifyContent,
  ...props
}: IView) => {
  return (
    <View
      style={[
        flexDirection === 'row' && styles.row,
        alignItems === 'flex-end' && styles.alignItemEnd,
        justifyContent === 'flex-end' && styles.justifyContentEnd,
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignItemEnd: {
    alignItems: 'flex-end',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
});

CustomView.defaultProps = {
  flexDirection: 'column',
};

export {CustomView as View};
