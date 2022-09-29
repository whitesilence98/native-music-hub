import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {View} from '@components';
import {useTheme} from '@context/theme.context';

const EnterOTPCursor = React.memo(() => {
  const {
    theme: {
      palette: {text},
    },
  } = useTheme();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      {iterations: 2000},
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        backgroundColor: text.primary,
        width: 2,
        height: 20,
        opacity: fadeAnim,
      }}></Animated.View>
  );
});

export default EnterOTPCursor;
