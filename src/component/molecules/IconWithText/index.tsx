import * as React from 'react';
import {View} from 'react-native';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';
import AppIcon from '../../atoms/AppIcon';
import AppText from '../../atoms/AppText';
import Touchable from '../../atoms/Touchable';
import styles from './styles';
interface IconWithTextProps {
  otherIcon?: any;
  item: {
    id: any;
    title: string;
    iconName: string;
  };
  onPress: (id: any) => void;
}

const IconWithText = ({otherIcon, item, onPress}: IconWithTextProps) => {
  return (
    <Touchable style={styles.cardContainer} onPress={() => onPress(item.id)}>
      <AppIcon name={item.iconName} color={COLORS.veryLightGrey} />
      <AppText style={styles.titleStyle}>{item.title}</AppText>
      <View style={styles.otherIconWrappar}>{otherIcon}</View>
    </Touchable>
  );
};

export default IconWithText;
