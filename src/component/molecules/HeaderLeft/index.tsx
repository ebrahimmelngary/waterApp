import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';
import {calcFont} from '../../../common/styles';
import AppIcon from '../../atoms/AppIcon';
import styles from './styles';

const HeaderLeft = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <AppIcon
        name={ICONS.notificationOutline}
        color={COLORS.blackCat}
        onPress={() => navigate('Notification')}
      />
      <AppIcon
        name={ICONS.search}
        color={COLORS.blackCat}
        size={calcFont(23)}
        onPress={() => navigate('Search')}
      />
    </View>
  );
};

export default HeaderLeft;
