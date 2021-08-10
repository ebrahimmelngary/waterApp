import * as React from 'react';
import {View, Image, ActivityIndicator, ViewStyle} from 'react-native';
import IMAGES from '../../../common/images';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../../atoms/AppText';
import {calcFont} from '../../../common/styles';
import Touchable from '../../atoms/Touchable';
import RatingStars from '../RatingStars';
export type ListItem = {
  id?: any;
  name?: string;
  location?: string;
  shipping?: string;
  review?: any;
  image?: string;
  isFavorite?: boolean;
  rating: number;
};
interface ListCardProps {
  style: ViewStyle;
  componentStyle?: string;
  onPress: (item: ListItem) => void;
  item: ListItem;
  remove?: boolean;
  onPressIcon: (item: ListItem) => void;
  isFavorite?: boolean;
  loading: boolean;
  vlaue?: ListItem;
  onFinishRating: (vlaue: number) => void;
  ratingDisabled: boolean;
}

const ListCard: React.FC<ListCardProps> = ({
  componentStyle,
  onPress,
  item,
  remove,
  onPressIcon,
  isFavorite,
  loading,
  vlaue,
  ratingDisabled,
  onFinishRating,
  style,
}) => {
  interface IconTextProps {
    iconName?: string;
    title?: string;
  }
  const IconText = ({iconName, title}: IconTextProps) => {
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
  const isItem = vlaue?.id === item?.id;
  const isFavoriteColor = isFavorite ? COLORS.watermelon : COLORS.Silver;
  const VirtcalComponant = () => {
    return (
      <Touchable
        style={[styles.virtcalStyleWrappar, style]}
        onPress={() => onPress(item)}>
        <View style={styles.virtcalView}>
          <View style={styles.virtcalImageWrappar}>
            <Image
              source={item.image || IMAGES.test}
              style={styles.imageStyle}
              resizeMode={'contain'}
            />
            {loading && isItem ? (
              <ActivityIndicator
                color={COLORS.dodgerBlue}
                size={calcFont(20)}
              />
            ) : (
              <AppIcon
                name={remove ? ICONS.bin : ICONS.heart}
                color={remove ? COLORS.silverSand : isFavoriteColor}
                onPress={() => onPressIcon(item)}
              />
            )}
          </View>
          <View style={styles.textVirtcalWrappar}>
            <AppText style={styles.titleStyle} numberOfLines={2}>
              {item.name}
            </AppText>
            <IconText title={item.location} iconName={ICONS.location} />
            <View style={styles.textIconWrapparVirtcalStyle}>
              <IconText title={item.shipping} iconName={ICONS.shipped} />
            </View>
            <RatingStars
              defaultRating={item.rating}
              isDisabled={ratingDisabled}
              onFinishRating={value => onFinishRating(value)}
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
            source={item.image || IMAGES.test}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textWrappar}>
          <AppText style={styles.titleStyle} numberOfLines={1}>
            {item.name}
          </AppText>
          <IconText title={item.location} iconName={ICONS.location} />
          <RatingStars
            defaultRating={item.rating}
            isDisabled={ratingDisabled}
            onFinishRating={value => onFinishRating(value)}
          />
        </View>
        <View style={styles.iconWrappar}>
          {loading && isItem ? (
            <ActivityIndicator color={COLORS.dodgerBlue} size={calcFont(20)} />
          ) : (
            <AppIcon
              name={ICONS.heart}
              color={isFavoriteColor}
              onPress={() => onPressIcon(item)}
            />
          )}
          <IconText title={item.shipping} iconName={ICONS.shipped} />
        </View>
      </Touchable>
    );
  };
  return componentStyle === 'virtcal' ? <VirtcalComponant /> : <RowComponent />;
};

export default ListCard;
