import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainStack} from '@constants/navigation.constant';
import {Home, Dashboard, Profile} from '@screens';
import {useTheme} from '@context/theme.context';

import NonAuthNavigation from './non-auth.navigation';
import AuthNavigation from './auth.navigation';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const {isDark} = useTheme();

  return (
    <>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={MainStack.Private} component={AuthNavigation} />
        <Stack.Screen name={MainStack.Public} component={NonAuthNavigation} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigation;
