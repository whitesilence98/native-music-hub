import React, {useCallback, useRef} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {useDispatch, useSelector} from 'react-redux';

import {Header} from '@components';
import Styles from '@styles';
import {hideModal} from '@my-store/modules/video-modal/video-modal.action';
import {videoModalSelector} from '@my-store/modules/video-modal/video-modal.selector';

import Video from './video-modal-video.component';
import Layout from './video-modal.layout';

const VideoModal = () => {
  const pan = useSharedValue(Styles.dimensions.height);
  const dispatch = useDispatch();
  const {show} = useSelector(videoModalSelector);

  const closeModal = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  return (
    <Layout pan={pan} show={show} onClose={closeModal}>
      <Header
        title="Relax"
        goBack={closeModal}
        iconSource={require('@assets/icons/down-arrow.png')}
      />
      {show && (
        <>
          <Video pan={pan} />
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default VideoModal;
