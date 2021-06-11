import * as React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import IMAGES from '../../../common/images';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../atoms/AppText';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';
const ListCard = ({componentStyle, onPress, title, location, shipping}) => {
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
      onPress={onPress}>
      {componentStyle === 'virtcal' ? (
        <View style={styles.virtcalView}>
          <View style={styles.virtcalImageWrappar}>
            <AppIcon
              name={ICONS.heart}
              color={COLORS.silverSand}
              size={calcFont(17)}
            />
            <Image source={IMAGES.avatr} style={styles.image} />
          </View>
          <AppText style={styles.titleStyle}>{title || 'ابراهيم محمد'}</AppText>
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
              {location || 'Tanta Elghrbia'}
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
              {shipping || 'two days'}
            </AppText>
          </View>
          <AppIcon name={ICONS.star} color={COLORS.gold} size={calcFont(14)} />
        </View>
      ) : (
        <>
          <View style={styles.imageWrappar}>
            <Image source={IMAGES.avatr} style={styles.image} />
          </View>
          <View style={styles.textWrappar}>
            <AppText style={styles.titleStyle}>
              {title || 'Ibrahim Mohamed'}
            </AppText>
            <View style={styles.textIconWrappar}>
              <AppIcon
                name={ICONS.location}
                color={COLORS.blackRock}
                size={calcFont(12)}
              />
              <AppText style={styles.loctationStyle}>
                {location || 'Tanta Elghrbia'}
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
                marginTop: calcHeight(5),
              }}>
              <AppIcon name={ICONS.shipped} color={COLORS.blackCat} />
              <AppText style={styles.loctationStyle}>
                {shipping || 'two days'}
              </AppText>
            </View>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ListCard;
