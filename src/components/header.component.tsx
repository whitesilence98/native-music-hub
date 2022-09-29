import React from 'react';
import {ViewProps, StyleSheet} from 'react-native';

import Styles from '@styles';
import {useTheme} from '@context/theme.context';
import {useNavigation} from '@react-navigation/native';

import {Image} from './image.component';
import {View} from './view.component';
import {TouchableOpacity} from './touchable-opacity.component';
import {Text} from './text';

interface IHeader extends ViewProps {
  classes?: any;
  goBack?: any;
  title?: string;
  iconSource?: any;
}

const Header = ({style, title, goBack, iconSource, ...props}: IHeader) => {
  const {
    theme: {
      palette: {text},
    },
  } = useTheme();
  const navigation = useNavigation();

  const onBack = () => {
    if (goBack) {
      goBack();
      return;
    }

    navigation.goBack();
  };

  return (
    <View style={[styles.root, style]} flexDirection="row" {...props}>
      <TouchableOpacity onPress={onBack}>
        <Image
          style={[styles.icon, {tintColor: text.primary}]}
          source={iconSource || require('@assets/icons/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.title} align="center" variant="h5">
        {title}
      </Text>
      <View style={styles.icon}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: Styles.gutter.container,
    height: 40,
  },
  icon: {
    width: Styles.moderateScale(14),
    height: Styles.moderateScale(14),
  },
  title: {flex: 1},
});

Header.defaultProps = {classes: {}};

export {Header};
