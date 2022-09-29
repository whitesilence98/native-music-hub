import React from 'react';
import {AuthStack} from '@constants/navigation.constant';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, Home, Profile, VideoModal} from '@screens';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <>
      <VideoModal />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={AuthStack.Home} component={Home} />
        <Stack.Screen name={AuthStack.Profile} component={Profile} />
        <Stack.Screen name={AuthStack.Dashboard} component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigation;
