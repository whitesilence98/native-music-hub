import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, TextInput, View} from '@components';

const PhoneSearch = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <View flexDirection="row">
      <TextInput
        placeholder={t('login.search_country_hint')}
        style={styles.input}
      />
      <Button
        onPress={() => navigation.goBack()}
        label={t('action.cancel')}
        variant="link"
        color="primary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {flex: 1},
});

export default PhoneSearch;
