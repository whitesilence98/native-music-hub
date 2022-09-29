import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';

import {Button, Header, ScreenLayout, View} from '@components';
import {NonAuthStack, MainStack} from '@constants';
import {useNavigation} from '@react-navigation/native';
import Styles from '@styles';

const Profile = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const onSignOut = () => {
    navigation.navigate(MainStack.Public, {screen: NonAuthStack.EnterPhone});
  };

  return (
    <ScreenLayout>
      <Header title={t('profile.title')} />

      <View style={styles.root}>
        <Button
          onPress={onSignOut}
          color="primary"
          label={t('action.logout')}
        />
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {margin: Styles.gutter.container, justifyContent: 'center', flex: 1},
});

export default Profile;
