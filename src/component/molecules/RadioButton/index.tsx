import * as React from 'react';
import {View} from 'react-native';
import AppIcon from '../../atoms/AppIcon';
import AppText from '../../atoms/AppText';
import styles from './styles';
import Touchable from '../../atoms/Touchable';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';

export type RadioButtonType = {
  id: number;
  label: string;
  value: number | string;
};
interface RadioButtonProps {
  isSelected: boolean;
  isAdd?: boolean;
  item: RadioButtonType;
  onPress: (item: RadioButtonType) => void;
  label?: string;
  onChange?: () => void;
}

const RadioButton = ({
  isSelected,
  isAdd,
  onPress,
  onChange,
  item,
  label,
}: RadioButtonProps) => {
  const CircleEllipse = ({withInnerView}: any) => {
    return (
      <View style={styles.circleWrapparView}>
        {withInnerView && <View style={styles.circleInnerView} />}
      </View>
    );
  };
  return (
    <View>
      <Touchable
        style={styles.selctedContainer}
        // android_ripple={{color: COLORS.gray, borderless: false, radius: 45}}
        onPress={() => onPress(item) || onChange}>
        <View style={styles.iconName}>
          {isSelected ? <CircleEllipse withInnerView /> : <CircleEllipse />}
          <AppText style={styles.labelText}>{item?.label || label}</AppText>
        </View>
        {isAdd && (
          <AppIcon name={ICONS.arrowleft} color={COLORS.white} size={20} />
        )}
      </Touchable>
    </View>
  );
};

export default RadioButton;
