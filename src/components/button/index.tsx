import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

import {Text} from '../text';
import {TouchableOpacity} from '../touchable-opacity.component';

import {useTheme} from '@context/theme.context';
import Styles from '@styles';
import colors from '@styles/colors.style';

interface IProps extends TouchableOpacityProps {
  label?: string;
  styleText?: any;
  variant: 'outlined' | 'contained' | 'link';
  color: 'secondary' | 'primary' | 'default';
  children?: any;
  loading?: boolean;
}

const Button = ({
  style,
  styleText,
  disabled,
  label,
  variant,
  children,
  color,
  loading,
  ...props
}: IProps) => {
  const {
    theme: {
      palette: {text},
    },
  } = useTheme();
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={StyleSheet.flatten([
        styleLayouts.root,
        color === 'primary' && styleTypes.containedPrimary,
        color === 'secondary' && styleTypes.containedSecondary,
        color === 'default' && styleTypes.containedDefault,
        variant === 'link' && styleTypes.containedLink,
        disabled && styleTypes.disabled,
        style,
      ])}
      {...props}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {children}
          {label && (
            <Text
              style={[
                styleTypes.text,
                variant === 'contained' && styleTypes.containedText,
                color === 'primary' && styleTypes.containedTextPrimary,
                styleText,
              ]}>
              {label}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: 'contained',
  color: 'default',
};

const styleLayouts = StyleSheet.create({
  root: {
    borderRadius: Styles.radius.button,
    paddingVertical: Styles.gutter.component,
    paddingHorizontal: Styles.gutter.container,
  },
});

const styleTypes = StyleSheet.create({
  text: {
    color: '#000',
    textAlign: 'center',
    fontFamily: Styles.fontFamily.bold,
    fontSize: Styles.normalize(16),
  },

  containedDefault: {
    backgroundColor: '#fff',
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },

  containedPrimary: {
    backgroundColor: colors.primary.main,
  },

  containedSecondary: {
    backgroundColor: colors.secondary.main,
  },

  containedText: {
    color: '#000',
  },

  containedTextPrimary: {
    color: '#fff',
  },

  disabled: {
    backgroundColor: '#acacac',
  },

  containedLink: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});

export {Button};
