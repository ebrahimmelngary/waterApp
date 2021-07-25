/* eslint-disable react-native/no-unused-styles */
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '../../Tabs';
import DetailsScreen from '../../../screens/DetailsScreen';
import Search from '../../../screens/Search';
import {calcHeight} from '../../../common/styles';
import COLORS from '../../../common/colors';
import Notification from '../../../screens/Notification';
import CheackOut from '../../../screens/CheckOut';
import Address from '../../../screens/Address';
import Maps from '../../../screens/Maps';
import OrderStatus from '../../../screens/OrderStatus';
const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={'Tabs'}
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} />
      <Stack.Screen
        name={'Search'}
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={'Maps'} component={Maps} />
      <Stack.Screen name={'Notification'} component={Notification} />
      <Stack.Screen name={'CheackOut'} component={CheackOut} />
      <Stack.Screen name={'Address'} component={Address} />
      <Stack.Screen name={'OrderStatus'} component={OrderStatus} />
    </Stack.Navigator>
  );
}
export const headerStyle = StyleSheet.create({
  headerStyles: {
    backgroundColor: COLORS.white,
    height: calcHeight(110),
  },
  headerTitleStyle: {
    alignSelf: 'center',
    color: COLORS.dodgerBlue,
  },
});

export default MainStack;
