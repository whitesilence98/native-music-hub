import React from 'react';
import {StyleSheet} from 'react-native';

import {Image, View, IconButton} from '@components';
import {useTheme} from '@context/theme.context';
import {useNavigation} from '@react-navigation/native';
import Styles from '@styles';
import {AuthStack, MainStack} from '@constants';

const HomeHeader = () => {
  const {
    theme: {
      palette: {text},
    },
  } = useTheme();
  const navigation = useNavigation();

  const goToProfileScreen = () => {
    navigation.navigate(MainStack.Private, {screen: AuthStack.Profile});
  };

  return (
    <View flexDirection="row" style={styles.root}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('@assets/images/logo.png')}
      />
      <View style={styles.icons} justifyContent="flex-end" flexDirection="row">
        <IconButton
          style={styles.icon}
          iconStyle={[styles.icon, {tintColor: text.primary}]}
          source={require('@assets/icons/search.png')}
        />
        <IconButton
          onPress={goToProfileScreen}
          style={styles.icon}
          iconStyle={[styles.icon, {tintColor: text.primary}]}
          source={require('@assets/icons/user.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: Styles.gutter.container,
    marginTop: Styles.gutter.component,
    marginBottom: Styles.gutter.container,
  },
  logo: {
    width: Styles.moderateScale(80),
    height: Styles.moderateScale(30),
  },
  icons: {flex: 1},
  icon: {
    backgroundColor: 'transparent',
    width: Styles.moderateScale(24),
    height: Styles.moderateScale(24),
    marginHorizontal: Styles.gutter.component,
  },
});

export default HomeHeader;
