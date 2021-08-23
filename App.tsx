import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import RootNavigtion from './src/navigation/RootNavigaton';
import GraphProvider from './src/service';
import Toast from 'react-native-toast-message';

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true}); // fade
  }, []);
  return (
    <GraphProvider>
      <RootNavigtion />
      <Toast ref={ref => Toast.setRef(ref)} />
    </GraphProvider>
  );
};

export default App;
