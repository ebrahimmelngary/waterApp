import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from '../../../screens/Intro';

const Stack = createStackNavigator();
function IntroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Intro'} component={Intro} />
    </Stack.Navigator>
  );
}

export default IntroStack;
