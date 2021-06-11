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
  return (
    <TouchableOpacity
      style={[
        styles.container,
        componentStyle === 'virtcal' && {
          width: calcWidth(150),
          height: calcHeight(175),
          flexDirection: 'column',
          padding: 10,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => onPress(item)}>
      {componentStyle === 'virtcal' ? (
        <View style={styles.virtcalView}>
          <View style={styles.virtcalImageWrappar}>
            <Image source={IMAGES.avatr} style={styles.image} />
            <AppIcon
              name={remove ? ICONS.location : ICONS.heart}
              color={COLORS.silverSand}
              size={calcFont(17)}
              onPress={() => onPressIcon(item)}
            />
          </View>
          <View style={{flex: 1}}>
            <AppText
              style={{...styles.titleStyle, marginVertical: calcHeight(5)}}
              numberOfLines={2}>
              {item.name || 'Ibrahim Mohamed '}
            </AppText>
            <View style={styles.textIconWrapparVirtcalStyle}>
              <AppIcon
                name={ICONS.location}
                color={COLORS.blackRock}
                size={calcFont(12)}
              />
              <AppText
                style={{
                  ...styles.loctationStyle,
                  marginVertical: 0,
                  marginTop: calcHeight(5),
                }}>
                {item.location || 'Tanta Elghrbia'}
              </AppText>
            </View>
            <View style={styles.textIconWrapparVirtcalStyle}>
              <AppIcon name={ICONS.shipped} color={COLORS.blackCat} />
              <AppText
                style={{
                  ...styles.loctationStyle,
                  marginVertical: 0,
                  marginTop: calcHeight(5),
                }}>
                {item.shipping || 'two days'}
              </AppText>
            </View>

            <AppIcon
              style={{position: 'absolute', bottom: -1}}
              name={ICONS.star}
              color={COLORS.gold}
              size={calcFont(14)}
            />
          </View>
        </View>
      ) : (
        <>
          <View style={styles.imageWrappar}>
            <Image source={IMAGES.avatr} style={styles.image} />
          </View>
          <View style={styles.textWrappar}>
            <AppText style={styles.titleStyle} numberOfLines={1}>
              {item.name || 'Ibrahim Mohamed'}
            </AppText>
            <View style={styles.textIconWrappar}>
              <AppIcon
                name={ICONS.location}
                color={COLORS.blackRock}
                size={calcFont(12)}
              />
              <AppText style={styles.loctationStyle}>
                {item.location || 'Tanta Elghrbia'}
              </AppText>
            </View>
            <AppIcon
              name={ICONS.star}
              color={COLORS.gold}
              size={calcFont(14)}
            />
          </View>
          <View style={styles.iconWrappar}>
            <AppIcon
              name={ICONS.heart}
              color={COLORS.silverSand}
              size={calcFont(17)}
            />
            <View
              style={{
                ...styles.textIconWrappar,
                alignItems: 'flex-end',
              }}>
              <AppIcon name={ICONS.shipped} color={COLORS.blackCat} />
              <AppText style={styles.loctationStyle}>
                {item.shipping || 'two days'}
              </AppText>
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ListCard;
