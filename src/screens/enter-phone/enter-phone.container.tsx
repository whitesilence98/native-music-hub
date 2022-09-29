import React from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from '@styles';
import {NonAuthStack} from '@constants';
import {
  IconButton,
  ScreenLayout,
  View,
  KeyboardAvoidingView,
} from '@components';

import Form from './enter-phone-form.component';

const EnterPhone = ({route: {params}}: any) => {
  const navigation = useNavigation();

  const goToOTPScreen = () => {
    navigation.navigate(NonAuthStack.EnterOTP);
  };

  const goToPhoneScreen = () => {
    navigation.navigate(NonAuthStack.Phone);
  };

  return (
    <ScreenLayout style={{backgroundColor: 'transparent'}}>
      <KeyboardAvoidingView style={styles.root}>
        <Form country={params?.country} goToPhoneScreen={goToPhoneScreen} />
        <View flexDirection={'row'} justifyContent="flex-end">
          <IconButton
            onPress={goToOTPScreen}
            style={styles.button}
            iconStyle={styles.icon}
            source={require('@assets/icons/next.png')}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: Styles.gutter.container,
    justifyContent: 'space-between',
  },
  button: {
    width: Styles.moderateScale(45),
    height: Styles.moderateScale(45),
  },
  icon: {width: Styles.moderateScale(20), height: Styles.moderateScale(30)},
});

export default EnterPhone;
