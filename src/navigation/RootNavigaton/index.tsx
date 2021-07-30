import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '../Stacks/AuthStack';
import IntroStack from '../Stacks/IntroStack';
import MainStack from '../Stacks/MainStack';
import {useSelector} from 'react-redux';
export default function RootNavigtion() {
  let user = useSelector(state => state?.user.token);
  const endIntro = useSelector(state => state?.intro.fristTime);
  return (
    <NavigationContainer>
      {endIntro ? user ? <MainStack /> : <AuthStack /> : <IntroStack />}
    </NavigationContainer>
  );
}
