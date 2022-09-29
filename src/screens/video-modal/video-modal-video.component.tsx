import React, {useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

interface IProps {
  pan: any;
}

const VideoModalData = ({pan}: IProps) => {
  return <YoutubePlayer height={500} play={true} videoId={'FjHGZj2IjBk'} />;
};

const styles = StyleSheet.create({
  root: {},
});

export default VideoModalData;
