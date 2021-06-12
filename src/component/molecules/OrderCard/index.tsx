import * as React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import IMAGES from '../../../common/images';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../atoms/AppText';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';

type item = {
  id: any;
  name: string;
  time?: string;
  amount: number;
};
interface OrderCardProps {
  onPress: (item: item) => void;
  item: item;
}

const OrderCard: React.FC<OrderCardProps> = ({onPress, item}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => onPress(item)}>
      <View style={styles.imageWrappar}>
        <Image source={IMAGES.avatr} style={styles.image} />
      </View>
      <View style={styles.textWrappar}>
        <AppText style={styles.titleStyle} numberOfLines={1}>
          {item.name || 'Ibrahim Mohamed'}
        </AppText>
        <AppText style={styles.timeStyle}>
          {item.time || new Date().toDateString()}
        </AppText>
      </View>
      <View style={styles.amountWrappar}>
        <AppText style={styles.amountText}>{item.amount || '- 200'}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
