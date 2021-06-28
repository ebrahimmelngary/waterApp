import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorite from '../../../screens/Favorite';
import {headerStyle} from '../MainStack';
const Stack = createStackNavigator();
function FavoriteStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: headerStyle.headerStyles,
      }}>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
}

export default FavoriteStack;
