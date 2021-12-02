import * as React from 'react';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';
import {calcFont} from '../../../common/styles';
import AppIcon from '../../atoms/AppIcon';
import IconWithText from '../IconWithText';
import styles from './styles';
interface AddressCardProps {
  iconColor?: string;
  onPress: (item) => void;
  item?: {
    id: number;
    street: string;
  };
  selected: any;
}

const AddressCard = ({onPress, item, selected}: AddressCardProps) => {
  return (
    <IconWithText
      item={{title: item?.street, iconName: ICONS.location}}
      style={styles.container}
      textStyle={styles.titleStyle}
      iconSize={calcFont(30)}
      onPress={() => onPress(item)}
      otherIcon={
        <AppIcon
          name={selected ? ICONS.radioChecked : ICONS.radioUnchecked}
          color={selected ? COLORS.dodgerBlue : COLORS.silverSand}
          disabled
        />
      }
    />
  );
};

export default AddressCard;
