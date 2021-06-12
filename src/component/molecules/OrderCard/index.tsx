import * as React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import IMAGES from '../../../common/images';
import styles from './styles';
import AppText from '../../atoms/AppText';

export type OrderCardItem = {
  id: any;
  name: string;
  time?: string;
  amount: number;
};
interface OrderCardProps {
  onPress: (item: OrderCardItem) => void;
  item: OrderCardItem;
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
          {item.name}
        </AppText>
        <AppText style={styles.timeStyle}>
          {item.time || new Date().toDateString()}
        </AppText>
      </View>
      <View style={styles.amountWrappar}>
        <AppText style={styles.amountText}>{item.amount}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
