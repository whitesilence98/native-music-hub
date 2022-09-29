import React from 'react';
import {
  I18nManager,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import Styles from '@styles';
import colors from '@styles/colors.style';

import {useTheme} from '@context/theme.context';

export interface ITextInputProps extends TextInputProps {
  variant?: 'outlined' | 'normal';
  children?: any;
  endIcon?: any;
  startIcon?: any;
  ref?: any;
}

const CustomTextInput = React.forwardRef(
  (
    {
      style,
      startIcon,
      endIcon,
      variant,
      onFocus,
      onBlur,
      ...props
    }: ITextInputProps,
    ref: any,
  ) => {
    const {isDark, theme} = useTheme();
    const [focused, setFocused] = React.useState(false);

    const _onFocus = (e: any) => {
      setFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    };

    const _onBlur = (e: any) => {
      setFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    return (
      <View
        style={[
          styleLayouts.root,
          {backgroundColor: theme.palette.background.paper},
          variant === 'outlined' && {
            borderColor: theme.palette.border,
            borderWidth: 1,
          },
          focused && styleLayouts.focused,
          style,
        ]}>
        {startIcon && <View style={styleLayouts.startIcon}>{startIcon}</View>}
        <TextInput
          ref={ref}
          onFocus={_onFocus}
          onBlur={_onBlur}
          placeholderTextColor={theme.palette.text.hint}
          keyboardAppearance={isDark ? 'dark' : 'light'}
          style={[styleLayouts.textInput, {color: theme.palette.text.primary}]}
          {...props}
        />
        {endIcon && <View style={styleLayouts.endIcon}>{endIcon}</View>}
      </View>
    );
  },
);

CustomTextInput.defaultProps = {
  variant: 'normal',
  maxLength: 100,
  selectionColor: colors.primary.main,
};

const styleLayouts = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: Styles.fontSize.body,
    fontFamily: Styles.fontFamily.regular,
    borderRadius: Styles.radius.button,
    paddingVertical: Styles.gutter.component,
    paddingHorizontal: Styles.gutter.container,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  startIcon: {
    marginRight: Styles.gutter.text,
  },
  endIcon: {
    marginLeft: Styles.gutter.text,
  },
  textInput: {flex: 1, padding: 0},
  focused: {
    borderColor: colors.primary.main,
    borderWidth: 1,
  },
});

export {CustomTextInput as TextInput};
