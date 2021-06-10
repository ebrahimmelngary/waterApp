import * as React from 'react';
import {View} from 'react-native';
import ICONS from '../../common/icons';
import AppButton from '../../component/atoms/AppButton';
import AppIcon from '../../component/atoms/AppIcon';

const Home = () => {
  return (
    <View style={{flex: 1, padding: 17}}>
      <AppButton title={'Button'} />
    </View>
  );
};

export default Home;
