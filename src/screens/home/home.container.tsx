import React from 'react';
import {Button, ScreenLayout} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import Styles from '@styles';
import {StyleSheet, View} from 'react-native';
import {MainStack} from '@constants';
import {showModal} from '@my-store/modules/video-modal/video-modal.action';

import Header from './home-header.component';

const Home = () => {
  const {t} = useTranslation('account');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToDashboardScreen = () => {
    navigation.navigate(MainStack.Dashboard);
  };

  const show = () => {
    dispatch(showModal());
  };

  return (
    <ScreenLayout>
      <Header />
      <View style={styles.root}>
        <Button onPress={show} label={'Show'} color="primary" />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, margin: Styles.gutter.container, justifyContent: 'center'},
});

export default Home;
