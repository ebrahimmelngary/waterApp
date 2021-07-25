import * as React from 'react';
import {TextStyle, View, ViewStyle} from 'react-native';
import COLORS from '../../../common/colors';
import AppIcon from '../../atoms/AppIcon';
import AppText from '../../atoms/AppText';
import Touchable from '../../atoms/Touchable';
import styles from './styles';
interface IconWithTextProps {
  otherIcon?: any;
  item?: {
    id?: any;
    title?: string;
    iconName?: string;
  };
  iconSize?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  onPress?: (id: any) => void;
  iconColor?: string;
}

const IconWithText = ({
  otherIcon,
  item,
  onPress,
  style,
  iconSize,
  iconColor,
  textStyle,
  disabled,
}: IconWithTextProps) => {
  return (
    <Touchable
      style={[styles.cardContainer, style]}
      onPress={onPress}
      disabled={disabled}>
      <AppIcon
        name={item.iconName}
        color={iconColor || COLORS.veryLightGrey}
        size={iconSize}
        disabled
      />
      <AppText style={[styles.titleStyle, textStyle]}>{item.title}</AppText>
      {otherIcon && <View style={styles.otherIconWrappar}>{otherIcon}</View>}
    </Touchable>
  );
};

export default IconWithText;
