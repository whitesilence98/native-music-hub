import React, {useState} from 'react';
import {Image, ImageProps, StyleSheet, View} from 'react-native';

import {useTheme} from '@context/theme.context';
import Styles from '@styles';

interface IProps extends ImageProps {
  onPress?: any;
  variant?: 'icon';
}

const CustomImage = ({source, variant, style, ...props}: IProps) => {
  const {
    theme: {
      palette: {divider},
    },
  } = useTheme();
  const [state, setState] = useState({
    error: false,
  });

  const onError = () => {
    setState(prevState => ({...prevState, error: true}));
  };

  if (state.error) {
    return <View style={[style, styles.empty]}></View>;
  }

  if (!source) {
    return null;
  }

  return (
    // @ts-ignore
    <Image
      style={[
        variant === 'icon' && styles.icon,
        variant === 'icon' && {tintColor: divider},
        style,
      ]}
      {...props}
      source={source}
      onError={onError}
    />
  );
};

CustomImage.defaultProps = {
  resizeMode: 'stretch',
};

const styles = StyleSheet.create({
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {width: Styles.moderateScale(10), height: Styles.moderateScale(10)},
});

export {CustomImage as Image};
