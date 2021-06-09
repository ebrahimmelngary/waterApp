import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../Stacks/HomeStack';
import AccountStack from '../Stacks/AccountStack';
import OrderStack from '../Stacks/OrderStack';
import FavoriteStack from '../Stacks/FavoriteStack';
const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Orders" component={OrderStack} />
      <Tab.Screen name="Favorite" component={FavoriteStack} />
      <Tab.Screen name="Account" component={AccountStack} />
    </Tab.Navigator>
  );
}
