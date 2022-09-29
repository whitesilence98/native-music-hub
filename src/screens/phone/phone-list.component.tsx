import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Text, TouchableOpacity, View} from '@components';
import {phoneListSelector} from '@my-store/modules/phone-list/phone-list.selector';
import Styles from '@styles';
import {NonAuthStack} from '@constants';

const PhoneData = () => {
  const {data} = useSelector(phoneListSelector);
  const navigation = useNavigation();

  const onRenderItem = ({item}: any) => {
    const onItemPress = () => {
      navigation.navigate({
        name: NonAuthStack.EnterPhone,
        params: {country: item},
        merge: true,
      });
    };

    return (
      <TouchableOpacity
        onPress={onItemPress}
        style={styles.row}
        flexDirection="row">
        <Text style={styles.flag} variant="subTitle1">
          {item.flag}
        </Text>
        <Text fullWidth variant="subTitle1">
          {item.name}
        </Text>
        <Text variant="subTitle1" color="textSecondary">
          {item.dial_code}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={styles.root}
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={onRenderItem}
    />
  );
};

const styles = StyleSheet.create({
  root: {paddingVertical: Styles.gutter.container},
  row: {
    paddingVertical: Styles.gutter.container,
  },
  flag: {
    marginRight: Styles.gutter.component,
  },
});

export default PhoneData;
