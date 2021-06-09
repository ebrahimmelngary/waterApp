import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favorite from '../../../screens/Favorite';
const Stack = createStackNavigator();
function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
}

export default FavoriteStack;
