import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '../Tabs';
import AuthStack from '../Stacks/AuthStack';

export default function RootNavigtion() {
  let user = true;
  return (
    <NavigationContainer>
      {user === true ? <Tabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
