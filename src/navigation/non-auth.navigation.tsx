import React from 'react';
import {NonAuthStack} from '@constants/navigation.constant';
import {createStackNavigator} from '@react-navigation/stack';
import {EnterOTP, EnterPhone, Phone} from '@screens';

const Stack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NonAuthStack.EnterPhone} component={EnterPhone} />
      <Stack.Screen name={NonAuthStack.EnterOTP} component={EnterOTP} />
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen name={NonAuthStack.Phone} component={Phone} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LoginNavigation;
