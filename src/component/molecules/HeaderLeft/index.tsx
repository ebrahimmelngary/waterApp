import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';
import {calcFont} from '../../../common/styles';
import AppIcon from '../../atoms/AppIcon';
import styles from './styles';
interface HeaderLeftProps {}

const HeaderLeft = (props: HeaderLeftProps) => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <AppIcon name={ICONS.notificationOutline} color={COLORS.blackCat} />
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
