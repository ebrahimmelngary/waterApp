import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {headerStyle} from '../MainStack';
import CheackOut from '../../../screens/CheckOut';
import DetailsScreen from '../../../screens/DetailsScreen';
import Search from '../../../screens/Search';
import Notification from '../../../screens/Notification';
const Stack = createStackNavigator();
function OtherScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'DetailsScreen'}
        component={DetailsScreen}
        options={{
          headerStyle: headerStyle.headerStyles,
        }}
      />
      <Stack.Screen name={'Search'} component={Search} />
      <Stack.Screen name={'Notification'} component={Notification} />
      <Stack.Screen
        name={'CheackOut'}
        component={CheackOut}
        options={{
          headerStyle: headerStyle.headerStyles,
        }}
      />
    </Stack.Navigator>
  );
}

export default OtherScreenStack;
