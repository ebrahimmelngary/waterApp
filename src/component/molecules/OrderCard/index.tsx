/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Image} from 'react-native';
import IMAGES from '../../../common/images';
import styles from './styles';
import AppText from '../../atoms/AppText';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import COLORS from '../../../common/colors';
import Touchable from '../../atoms/Touchable';
import {Order} from '../../../screens/Orders';

interface OrderCardProps {
  onPress: (item: Order) => void;
  item: Order;
  disabled: boolean;
}

const OrderCard: React.FC<OrderCardProps> = ({onPress, item, disabled}) => {
  return (
    <Touchable
      disabled={disabled}
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => onPress(item)}>
      <View style={styles.imageWrappar}>
        <Image source={IMAGES.test} style={styles.image} />
      </View>
      <View style={styles.textWrappar}>
        <AppText style={styles.titleStyle} numberOfLines={1}>
          {item.company.name}
        </AppText>
        {item.status ? (
          <View
            style={{
              ...styles.textIconWrappar,
              alignItems: 'flex-end',
            }}>
            <AppIcon name={ICONS.shipped} color={COLORS.blackCat} disabled />
            <AppText style={styles.loctationStyle}>{item.shippingCost}</AppText>
          </View>
        ) : (
          <AppText style={styles.timeStyle}>
            {item.estimatedDeliveryDate || new Date().toDateString()}
          </AppText>
        )}
      </View>
      <View style={styles.amountWrappar}>
        <AppText style={styles.amountText}>{item.total}</AppText>
        {item.status && (
          <View style={styles.stateTextView}>
            <AppText style={styles.stateText}>{item.status}</AppText>
          </View>
        )}
      </View>
    </Touchable>
  );
};

export default OrderCard;
