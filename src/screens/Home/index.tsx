import * as React from 'react';
import {View} from 'react-native';
import AppButton from '../../component/atoms/AppButton';

const Home = () => {
  return (
    <View style={{flex: 1, padding: 17}}>
      <AppButton title={'Button'} />
    </View>
  );
};

export default Home;
