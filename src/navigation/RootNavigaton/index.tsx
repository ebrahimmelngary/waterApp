import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '../Tabs';
import AuthStack from '../Stacks/AuthStack';
import IntroStack from '../Stacks/IntroStack';
import {useSelector} from 'react-redux';
export default function RootNavigtion() {
  let user = false;
  const endIntro = useSelector(state => state.intro.fristTime);
  return (
    <NavigationContainer>
      {endIntro ? user ? <Tabs /> : <AuthStack /> : <IntroStack />}
    </NavigationContainer>
  );
}
