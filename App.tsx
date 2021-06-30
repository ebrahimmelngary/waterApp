/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import RootNavigtion from './src/navigation/RootNavigaton';

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true}); // fade
  }, []);
  return <RootNavigtion />;
};

export default App;
