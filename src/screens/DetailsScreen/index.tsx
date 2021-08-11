import {useNavigation, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import AppIcon from '../../component/atoms/AppIcon';
import AppText from '../../component/atoms/AppText';
import AppButton from '../../component/atoms/AppButton';
import ICONS from '../../common/icons';
import styles from './styles';
import COLORS from '../../common/colors';
import CloudText from '../../component/atoms/CloudText';
import ReviewList from '../../component/template/ReviewList';
import {Trans} from '../../i18n';
import Counter from '../../component/molecules/Counter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useMutation, useQuery} from '@apollo/client';
import {
  ADD_TO_FAVORITE,
  GET_COMPANY,
  Get_CompanyReviews,
  GET_ISFAVORITE,
  REMOVE_FAV,
} from '../../service';
import {AddToFavorite} from '../Home';
import RatingStars from '../../component/molecules/RatingStars';
import EmptyScreen from '../../component/template/EmptyScreen';
import IMAGES from '../../common/images';
import ReloadingScreen from '../../component/template/ReloadingScreen';
import {User} from '../Orders';
interface Company {
  id: string;
  email: string;
  name: string;
  role: string;
  profilePicture: string;
  isFavorite: Boolean;
  rating: number;
}
export type CompanyReview = {
  id: string;
  message: string;
  rate: number;
  customer: User;
  company: Company;
};

const DetailsScreen = () => {
  const {item} = useRoute<any>().params;

  const {setOptions, navigate} = useNavigation();
  React.useLayoutEffect(() => {
    refetchIsFavRequest();
    setOptions({
      title: item.name,
    });
  }, []);
  //Get Company details
  const {data, loading, error, refetch} = useQuery<{
    company: Company;
  }>(GET_COMPANY, {
    variables: {id: item?.id},
  });
  const {
    data: reviews,
    // loading: revLoading,
    // error: revError,
    // refetch: reCallReview,
  } = useQuery<{companyReviews: CompanyReview[]}>(Get_CompanyReviews, {
    variables: {id: item?.id},
  });

  const [favLoading, setFavLoading] = React.useState<boolean>(false);
  // Check if Company isFavorite
  const {data: isFavorite, refetch: refetchIsFavRequest} = useQuery(
    GET_ISFAVORITE,
    {variables: {companyId: item.id}},
  );
  // Remove Company from Favorite list
  const [remove] = useMutation<{removeFavorite: boolean}, {companyId: any}>(
    REMOVE_FAV,
  );
  // Add Company to Favorite list
  const [addToFav] = useMutation<
    {createFavorite: AddToFavorite},
    {companyId: any}
  >(ADD_TO_FAVORITE);
  // checkAction switch bettwen Remove and Add Request
  const checkAction = async () => {
    setFavLoading(true);

    if (isFavorite?.isFavorite) {
      await remove({variables: {companyId: data?.company?.id}});
      refetchIsFavRequest();
      setFavLoading(false);
    } else {
      await addToFav({
        variables: {
          companyId: item?.id,
        },
      });
      refetchIsFavRequest();
      setFavLoading(false);
    }
  };

  const [amount, setAmount] = React.useState(1);
  const increase = () => setAmount(prev => prev + 1);

  const decrease = () => {
    if (amount > 1) {
      setAmount(prev => prev - 1);
    }
  };
  const TotalPrice = amount * 10;
  if (loading) {
    return <ReloadingScreen />;
  }
  if (error) {
    <EmptyScreen onPressIcon={() => refetch()} message={error.message} />;
  }
  return (
    <KeyboardAwareScrollView
      key={'detailsScreenPearnt'}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.headerWrappar}>
          <Image
            source={data?.company?.profilePicture || IMAGES.test}
            style={styles.imageStyle}
          />
          <RatingStars defaultRating={data?.company?.rating} isDisabled />
          <CloudText
            style={styles.cloudStyle}
            titleStyle={styles.cloudNameStyle}
            tiltle={data?.company?.name}
          />
          <View style={styles.headerIconsWarppar}>
            {favLoading ? (
              <ActivityIndicator style={styles.headerIconsCard} />
            ) : (
              <AppIcon
                name={ICONS.heart}
                color={
                  isFavorite?.isFavorite ? COLORS.watermelon : COLORS.Silver
                }
                style={styles.headerIconsCard}
                onPress={() => checkAction()}
              />
            )}
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
              {Trans('comments') +
                ` ( ${reviews?.companyReviews.length || 0} )`}
            </AppText>
            {item?.review?.length > 3 && (
              <AppText style={styles.seeAllText}>{Trans('seeAll')}</AppText>
            )}
          </View>
          {reviews?.companyReviews && (
            <ReviewList data={reviews?.companyReviews.slice(0, 3)} />
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
