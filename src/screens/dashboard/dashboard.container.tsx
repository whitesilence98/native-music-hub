import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import Styles from '@styles';
import {Button, ScreenLayout, Text} from '@components';
import {MainStack} from '@constants';

const Dashboard = () => {
  const navigation = useNavigation();
  const {t} = useTranslation('common');

  const goToHomeScreen = () => {
    navigation.navigate(MainStack.Home);
  };

  return (
    <ScreenLayout>
      <View style={styles.root}>
        <Text variant="h1">{t('welcome')}</Text>

        <Text color="primary">primary</Text>
        <Text color="secondary">secondary</Text>
        <Text color="textPrimary">textPrimary</Text>
        <Text color="textSecondary">textSecondary</Text>

        <Button label={'Button 1'} variant="contained" color="primary" />
        <View style={{height: 20}}></View>
        <Button label={'Button 2'} variant="outlined" />
        <View style={{height: 20}}></View>
        <View style={{height: 20}}></View>
        <Button
          onPress={goToHomeScreen}
          label={'Go to home'}
          variant="outlined"
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, margin: Styles.gutter.container, justifyContent: 'center'},
});

export default Dashboard;
