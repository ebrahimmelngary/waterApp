import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../../../screens/Account';
import {headerStyle} from '../MainStack';
const Stack = createStackNavigator();
function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: headerStyle.headerStyles,
      }}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}

export default AccountStack;
