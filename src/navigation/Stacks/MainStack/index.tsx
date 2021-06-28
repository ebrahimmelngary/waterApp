import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '../../Tabs';
import DetailsScreen from '../../../screens/DetailsScreen';
import Search from '../../../screens/Search';
import {calcHeight, calcWidth} from '../../../common/styles';
import COLORS from '../../../common/colors';
import Notification from '../../../screens/Notification';
const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          borderWidth: 0,
          borderBottomColor: COLORS.white,
          shadowColor: COLORS.white,
        },
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
      <Stack.Screen name={'Search'} component={Search} />
      <Stack.Screen name={'Notification'} component={Notification} />
    </Stack.Navigator>
  );
}
export const headerStyle = StyleSheet.create({
  headerStyles: {
    backgroundColor: COLORS.white,
    height: calcHeight(110),
    borderRadius: calcWidth(40),
  },
});

export default MainStack;
