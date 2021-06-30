import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home';
import HeaderLeft from '../../../component/molecules/HeaderLeft';
import {headerStyle} from '../MainStack';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerStyle: headerStyle.headerStyles,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default HomeStack;
