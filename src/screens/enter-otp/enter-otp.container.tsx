import {
  Button,
  Header,
  KeyboardAvoidingView,
  ScreenLayout,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from '@components';
import {useTheme} from '@context/theme.context';
import Styles from '@styles';
import Colors from '@styles/colors.style';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import EnterOTPCursor from './enter-otp-cursor';
import useHook, {OTP_LENGTH} from './enter-otp.hook';

const EnterOTP = () => {
  const {t} = useTranslation();
  const {
    refInput,
    otp,
    focused,
    goToDashboardScreen,
    onOTPChange,
    onOTPBlur,
    onOTPPress,
  } = useHook();
  const {
    theme: {
      palette: {background, text},
    },
  } = useTheme();

  return (
    <ScreenLayout>
      <Header />
      <KeyboardAvoidingView style={styles.root}>
        <Text style={styles.title} align="center" variant="h6">
          {t('login.otp_note')}
        </Text>
        <TextInput
          ref={refInput}
          value={otp}
          onChangeText={onOTPChange}
          style={styles.textInput}
          keyboardType="number-pad"
          onBlur={onOTPBlur}
          autoFocus
        />
        <View flexDirection="row" style={styles.otps}>
          {Array(OTP_LENGTH)
            .fill(0)
            .map((n: any, i: number) => {
              const selected = focused && i === otp.length;
              return (
                <TouchableOpacity
                  key={i}
                  onPress={onOTPPress}
                  style={[
                    styles.otp,
                    selected && {
                      borderColor: Colors.primary.main,
                      borderWidth: 2,
                    },
                    {backgroundColor: background.paper},
                  ]}>
                  <Text variant="h4">{otp[i]}</Text>
                  {selected && <EnterOTPCursor />}
                </TouchableOpacity>
              );
            })}
        </View>
        <Button
          // disabled={otp.length < OTP_LENGTH}
          onPress={goToDashboardScreen}
          label={t('login.verify')}
        />
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: Styles.gutter.container, justifyContent: 'center'},
  otps: {
    justifyContent: 'space-between',
    marginBottom: Styles.gutter.container,
  },
  otp: {
    position: 'relative',
    width: 50,
    height: 50,
    borderRadius: Styles.radius.button,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: Styles.gutter.container * 2,
  },
  textInput: {
    height: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0,
  },
});

export default EnterOTP;
