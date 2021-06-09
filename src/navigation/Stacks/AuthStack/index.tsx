import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../../screens/Auth/Login';
import signup from '../../../screens/Auth/signup';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signup" component={signup} />
    </Stack.Navigator>
  );
};

export default AuthStack;
