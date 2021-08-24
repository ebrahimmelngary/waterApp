import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ForgetPassword from '../../../screens/Auth/ForgetPassword';
import NewPassword from '../../../screens/Auth/ForgetPassword/NewPassword';
import LoginScreen from '../../../screens/Auth/LoginScreen';
import SignupScreen from '../../../screens/Auth/SignupScreen';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
