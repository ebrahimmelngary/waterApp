import * as React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import IMAGES from '../../../common/images';
import styles from './styles';
import AppText from '../../atoms/AppText';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import COLORS from '../../../common/colors';
import Touchable from '../../atoms/Touchable';
export type OrderCardItem = {
  id: any;
  name: string;
  time?: string;
  amount: number;
  state?: string;
  shipping?: string;
};
interface OrderCardProps {
  onPress: (item: OrderCardItem) => void;
  item: OrderCardItem;
}

const OrderCard: React.FC<OrderCardProps> = ({onPress, item}) => {
  return (
    <Touchable
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => onPress(item)}>
      <View style={styles.imageWrappar}>
        <Image source={IMAGES.test} style={styles.image} />
      </View>
      <View style={styles.textWrappar}>
        <AppText style={styles.titleStyle} numberOfLines={1}>
          {item.name}
        </AppText>
        {item.state ? (
          <View
            style={{
              ...styles.textIconWrappar,
              alignItems: 'flex-end',
            }}>
            <AppIcon name={ICONS.shipped} color={COLORS.blackCat} disabled />
            <AppText style={styles.loctationStyle}>{item.shipping}</AppText>
          </View>
        ) : (
          <AppText style={styles.timeStyle}>
            {item.time || new Date().toDateString()}
          </AppText>
        )}
      </View>
      <View style={styles.amountWrappar}>
        <AppText style={styles.amountText}>{item.amount}</AppText>
        {item.state && (
          <View style={styles.stateTextView}>
            <AppText style={styles.stateText}>{item.state}</AppText>
          </View>
        )}
      </View>
    </Touchable>
  );
};

export default OrderCard;
