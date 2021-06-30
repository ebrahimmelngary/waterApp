import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Orders from '../../../screens/Orders';
import {headerStyle} from '../MainStack';
const Stack = createStackNavigator();
function OrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Order" component={Orders} />
    </Stack.Navigator>
  );
}

export default OrderStack;
