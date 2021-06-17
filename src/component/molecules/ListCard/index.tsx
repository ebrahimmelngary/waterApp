import * as React from 'react';
import {View, Image} from 'react-native';
import IMAGES from '../../../common/images';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../atoms/AppText';
import {calcFont} from '../../../common/styles';
import Touchable from '../../atoms/Touchable';
type item = {
  id: any;
  name: string;
  location: string;
  shipping: string;
  review?: any;
};
interface ListCardProps {
  componentStyle: string;
  onPress: (item: item) => void;
  item: item;
  remove?: boolean;
  onPressIcon: (item: item) => void;
}

const ListCard: React.FC<ListCardProps> = ({
  componentStyle,
  onPress,
  item,
  remove,
  onPressIcon,
}) => {
  const IconText = ({iconName, title}) => {
    return (
      <View style={styles.textIconWrappar}>
        <AppIcon
          disabled
          name={iconName}
          color={COLORS.blackRock}
          size={calcFont(21)}
        />
        <AppText style={styles.loctationStyle}>{title}</AppText>
      </View>
    );
  };
  const VirtcalComponant = () => {
    return (
      <Touchable
        style={componentStyle === 'virtcal' && styles.virtcalStyleWrappar}
        onPress={() => onPress(item)}>
        <View style={styles.virtcalView}>
          <View style={styles.virtcalImageWrappar}>
            <Image
              source={IMAGES.test}
              style={styles.image}
              resizeMode={'contain'}
            />
            <AppIcon
              name={remove ? ICONS.location : ICONS.heart}
              color={COLORS.silverSand}
              onPress={() => onPressIcon(item)}
            />
          </View>
          <View style={styles.textVirtcalWrappar}>
            <AppText style={styles.titleStyle} numberOfLines={2}>
              {item.name}
            </AppText>
            <IconText title={item.location} iconName={ICONS.location} />
            <View style={styles.textIconWrapparVirtcalStyle}>
              <IconText title={item.shipping} iconName={ICONS.shipped} />
            </View>

            <AppIcon
              style={{position: 'absolute', bottom: -1}}
              name={ICONS.star}
              color={COLORS.gold}
            />
          </View>
        </View>
      </Touchable>
    );
  };
  const RowComponent = () => {
    return (
      <Touchable style={styles.container} onPress={() => onPress(item)}>
        <View style={styles.imageWrappar}>
          <Image
            source={IMAGES.test}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textWrappar}>
          <AppText style={styles.titleStyle} numberOfLines={1}>
            {item.name}
          </AppText>
          <IconText title={item.location} iconName={ICONS.location} />
          <AppIcon name={ICONS.star} color={COLORS.gold} size={calcFont(18)} />
        </View>
        <View style={styles.iconWrappar}>
          <AppIcon name={ICONS.heart} color={COLORS.silverSand} />
          <IconText title={item.shipping} iconName={ICONS.shipped} />
        </View>
      </Touchable>
    );
  };
  return componentStyle === 'virtcal' ? <VirtcalComponant /> : <RowComponent />;
};

export default ListCard;
