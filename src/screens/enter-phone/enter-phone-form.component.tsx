import React, {useState, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';

import {
  Text,
  View,
  Image,
  Divider,
  TouchableOpacity,
  FieldInput,
} from '@components';
import Styles from '@styles';

interface IProps {
  country?: object;
  goToPhoneScreen: any;
}

const countryDef = {
  name: 'Vietnam',
  flag: '🇻🇳',
  code: 'VN',
  dial_code: '+84',
};

const EnterPhoneForm = ({goToPhoneScreen, country}: IProps) => {
  const [state, setState] = useState({
    country: {},
  });
  const inputRef = useRef(null);
  const {t} = useTranslation();

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      country: country ? {...country} : {...countryDef},
    }));

    if (country) {
      inputRef.current?.focus();
    }
  }, [country, setState, inputRef]);

  const onChangeText = () => {
    setState(prevState => ({...prevState}));
  };

  return (
    <View style={styles.root}>
      <Text variant="h2">{t('login.sign_in')}</Text>
      <View style={styles.form} flexDirection="row">
        <FieldInput
          label={t('login.phone_number')}
          inputProps={{
            ref: inputRef,
            onChangeText: onChangeText,
            startIcon: (
              <TouchableOpacity onPress={goToPhoneScreen} flexDirection="row">
                <Text>{state.country.flag}</Text>
                <Text style={styles.dialCode} variant="subTitle1">
                  {state.country.dial_code}
                </Text>
                <Image
                  variant="icon"
                  source={require('@assets/icons/arrow-down.png')}
                />
                <Divider style={styles.divider} orientation="vertical" />
              </TouchableOpacity>
            ),
            keyboardType: 'numbers-and-punctuation',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: Styles.gutter.container * 10,
  },
  form: {
    marginTop: Styles.gutter.container * 2,
    marginBottom: Styles.gutter.container,
  },
  dialCode: {marginHorizontal: Styles.gutter.text},
  divider: {marginHorizontal: Styles.gutter.component},
});

export default EnterPhoneForm;
