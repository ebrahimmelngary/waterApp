/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Store from './src/redux/store';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const inApp = () => {
  return (
    <Provider store={Store.store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => inApp);
