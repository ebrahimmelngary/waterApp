import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '../Tabs';
import AuthStack from '../Stacks/AuthStack';
import IntroStack from '../Stacks/IntroStack';
import MainStack from '../Stacks/MainStack';
import {useSelector} from 'react-redux';
export default function RootNavigtion() {
  let user = true;
  const endIntro = useSelector(state => state.intro.fristTime);
  return (
    <NavigationContainer>
      {/* {endIntro ? user ? <MainStack /> : <AuthStack /> : <IntroStack />} */}
      <AuthStack /> 
    </NavigationContainer>
  );
}
