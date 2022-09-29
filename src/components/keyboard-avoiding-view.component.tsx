import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  KeyboardAvoidingViewProps,
} from 'react-native';

import Styles from '@styles';

interface IProps extends KeyboardAvoidingViewProps {
  children: any;
}

const KeyboardAvoidingViewCustom = (props: IProps) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={44 + Styles.gutter.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...props}
    />
  );
};

export {KeyboardAvoidingViewCustom as KeyboardAvoidingView};

// import React from 'react';
// import {Platform} from 'react-native';
// import {
//   KeyboardAwareScrollView,
//   KeyboardAwareScrollViewProps,
// } from 'react-native-keyboard-aware-scroll-view';

// interface IProps extends KeyboardAwareScrollViewProps {
//   children: any;
// }

// const KeyboardAvoidingViewCustom = (props: IProps) => {
//   return <KeyboardAwareScrollView {...props} />;
// };

// export {KeyboardAvoidingViewCustom as KeyboardAvoidingView};
