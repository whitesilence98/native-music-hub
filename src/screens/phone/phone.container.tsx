import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, ScreenLayout, View} from '@components';
import Styles from '@styles';

import usePhoneHook from './phone.hook';

import PhoneSearch from './phone-search.component';
import PhoneData from './phone-list.component';

const Phone = () => {
  const {firstLoad} = usePhoneHook();
  return (
    <ScreenLayout style={styles.root}>
      <View style={styles.body}>
        <PhoneSearch />
        {!firstLoad && <PhoneData />}
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  body: {padding: Styles.gutter.container},
});

export default Phone;
