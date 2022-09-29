import {useRef, useState} from 'react';
import {AuthStack, MainStack} from '@constants';
import {useNavigation} from '@react-navigation/native';

export const OTP_LENGTH = 6;

const useEnterOTPHook = () => {
  const refInput = useRef(null);
  const [otp, setOTP] = useState('');
  const [focused, setFocus] = useState(true);

  const navigation = useNavigation();

  const goToDashboardScreen = () => {
    navigation.navigate(MainStack.Private, {screen: AuthStack.Home});
  };

  const onOTPPress = () => {
    refInput.current?.focus();
    setFocus(true);
  };

  const onOTPBlur = () => {
    setFocus(false);
  };

  const onOTPChange = (text: string) => {
    if (text.length > OTP_LENGTH) {
      return;
    }

    setOTP(text);
  };
  return {
    refInput,
    otp,
    focused,
    goToDashboardScreen,
    onOTPChange,
    onOTPBlur,
    onOTPPress,
  };
};
export default useEnterOTPHook;
