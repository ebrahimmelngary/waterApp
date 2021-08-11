import * as React from 'react';
import {FlatList, View, Image} from 'react-native';
import AppText from '../../atoms/AppText';
import styles from './styles';
import {KEY_EXTRACTOR} from '../../../common/styles';
import {CompanyReview} from '../../../screens/DetailsScreen';
import IMAGES from '../../../common/images';

interface ReviewListProps {
  data: CompanyReview[];
}
const ReviewList = ({data}: ReviewListProps) => {
  const ReviewCard = (item: {item: CompanyReview}) => {
    return (
      <View style={styles.cardWrappar}>
        <View style={styles.rowViewStyle}>
          <Image
            source={
              item?.item?.customer.profilePicture
                ? {uri: item?.item?.customer?.profilePicture}
                : IMAGES.test
            }
            style={styles.imageStyle}
          />
          <AppText style={styles.nameStyle}>
            {item?.item?.customer?.name}
          </AppText>
          <AppText style={styles.timeStyle}>{item?.item?.rate}</AppText>
        </View>
        <View style={styles.commentWrapparStyle}>
          <AppText style={styles.commentTextStyle}>
            {item?.item?.message}
          </AppText>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.listStyle}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={KEY_EXTRACTOR}
        data={data}
        renderItem={({item}) => <ReviewCard item={item} />}
      />
    </View>
  );
};

export default ReviewList;
