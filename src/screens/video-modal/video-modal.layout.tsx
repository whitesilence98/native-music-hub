import React, {useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  PanResponder,
  PanResponderGestureState,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

import Styles from '@styles';
import {Background} from '@components/layout/ScreenLayout';
import {View} from '@components';
import {useDispatch} from 'react-redux';
import {hideModal} from '@my-store/modules/video-modal/video-modal.action';

const VideoModalLayout = ({pan, show, onClose, ...props}: any) => {
  const pressed = useSharedValue(false);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: pan.value,
    };
  }, [pan.value]);
  const dispatch = useDispatch();
  const onShowModal = useCallback(() => {
    'worklet';
    pan.value = withTiming(0, {duration: 300, easing: Easing.linear});
  }, [pan]);

  const onHideModal = useCallback(() => {
    'worklet';
    pan.value = withTiming(Styles.dimensions.height, {
      duration: 300,
      easing: Easing.linear,
    });
  }, [pan]);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onActive: (event, ctx) => {
      pan.value = event.translationY;
    },
    onEnd: (event, ctx) => {
      const translationY = event.translationY;

      // if (translationY > Styles.dimensions.height / 2) {
      //   onHideModal();
      // } else {
      onShowModal();
      // }
      pressed.value = false;
    },
  });

  useEffect(() => {
    if (show) {
      onShowModal();
    } else {
      onHideModal();
    }
  }, [show, onShowModal, onHideModal]);

  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[styles.root, animatedStyles]}>
        <Background>
          <SafeAreaView {...props}></SafeAreaView>
        </Background>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: Styles.dimensions.height - 1,
    zIndex: 1,
    paddingVertical: Styles.gutter.container,
  },
});

export default VideoModalLayout;
