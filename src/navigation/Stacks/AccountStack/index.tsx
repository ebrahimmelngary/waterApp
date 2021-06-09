import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../../../screens/Account';
const Stack = createStackNavigator();
function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}

export default AccountStack;
