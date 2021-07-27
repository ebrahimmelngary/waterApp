import {useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {View, Image} from 'react-native';
import AppIcon from '../../component/atoms/AppIcon';
import AppText from '../../component/atoms/AppText';
import AppButton from '../../component/atoms/AppButton';
import ICONS from '../../common/icons';
import styles from './styles';
import COLORS from '../../common/colors';
import CloudText from '../../component/atoms/CloudText';
import ReviewList, {Reviewitem} from '../../component/template/ReviewList';
import {Trans} from '../../i18n';
import Counter from '../../component/molecules/Counter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface DetaolsItem {
  name: string;
  id: number;
  image: string;
  review: Reviewitem;
}

const DetailsScreen = () => {
  const {setOptions, navigate} = useNavigation();
  React.useLayoutEffect(() => {
    setOptions({
      title: item.name,
    });
  }, []);
  const [amount, setAmount] = React.useState(1);
  const [fav, setFav] = React.useState(false);
  const {item} = useRoute<Array<DetaolsItem>>().params;

  const increase = React.useCallback(
    () => setAmount(prev => prev + 1),
    [amount],
  );
  const decrease = () => {
    if (amount > 1) {
      setAmount(prev => prev - 1);
    }
  };

  console.log(item.reviews);
  const TotalPrice = amount * 10;
  return (
    <KeyboardAwareScrollView
      key={'detailsScreenPearnt'}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerWrappar}>
          <Image source={item.image} style={styles.imageStyle} />
          <AppIcon name={ICONS.star} size={20} color={COLORS.gold} />
          <CloudText
            style={styles.cloudStyle}
            titleStyle={styles.cloudNameStyle}
            tiltle={item.name}
          />
          <View style={styles.headerIconsWarppar}>
            <AppIcon
              name={ICONS.heart}
              color={fav ? COLORS.watermelon : COLORS.Silver}
              style={styles.headerIconsCard}
              onPress={() => setFav(prev => !prev)}
            />
            <AppIcon
              name={ICONS.mail}
              color={COLORS.Silver}
              style={styles.headerIconsCard}
            />
          </View>
        </View>
        <AppText style={styles.titleTextStyle}>
          Inpoo the best of water Company, it is depend on easy way to drink
          Water
        </AppText>
        <View>
          <CloudText
            withIcon
            style={styles.cloudStyle}
            tiltle={'Tanta,306 strer ,tanta-Stediam'}
            iconName={ICONS.location}
          />
          <CloudText
            withIcon
            style={styles.cloudStyle}
            tiltle={'Saturday to Thursday'}
            iconName={ICONS.shipped}
          />
          <CloudText
            withIcon
            style={styles.cloudStyle}
            tiltle={'0403343434 - 011632323322'}
            iconName={ICONS.telephone}
          />
          <CloudText
            withIcon
            style={styles.cloudStyle}
            tiltle={'Available from 5 a.m. to 9 p.m'}
            iconName={ICONS.time}
          />
        </View>
        <View style={styles.reviewWrapparStyle}>
          <View style={styles.reviewListHeader}>
            <AppText style={styles.commentsTitle}>
              {Trans('comments') + ` ( ${item?.review?.length || 0} )`}
            </AppText>
            {item?.review?.length > 3 && (
              <AppText style={styles.seeAllText}>{Trans('seeAll')}</AppText>
            )}
          </View>
          {item?.review?.length && (
            <ReviewList data={item.review.slice(0, 3)} />
          )}
        </View>
        <View style={styles.quantityWrapparStyle}>
          <View>
            <AppText style={styles.quantityTitleStyle}>
              {Trans('quantity')}
            </AppText>
            <Counter
              maxValue={item.quantity}
              increase={increase}
              decrease={() => decrease()}
              value={amount}
              handleInputAmount={value =>
                value >= 1 ? setAmount(value) : null
              }
            />
          </View>
          <View>
            <AppText style={styles.quantityTitleStyle}> Price :</AppText>
            <View style={styles.priceViewStyle}>
              <AppText style={styles.totalNumberStyle}>{TotalPrice} $</AppText>
            </View>
          </View>
        </View>
        <AppButton
          title={Trans('done')}
          buttonStyle={styles.doneButtonStyle}
          onPress={() => navigate('CheackOut', {item, amount, TotalPrice})}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default DetailsScreen;
