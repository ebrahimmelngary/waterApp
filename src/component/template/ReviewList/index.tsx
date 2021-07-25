/* eslint-disable react/prop-types */
import * as React from 'react';
import {FlatList, View, Image} from 'react-native';
import AppText from '../../atoms/AppText';
import styles from './styles';
import {KEY_EXTRACTOR} from '../../../common/styles';

export type Reviewitem = {
  name: string;
  time: string;
  comment: string;
  image: string;
};
interface ReviewListProps {
  data: Array<Reviewitem>;
}
const ReviewList = ({data}: ReviewListProps) => {
  const ReviewCard = ({item}) => {
    return (
      <View style={styles.cardWrappar}>
        <View style={styles.rowViewStyle}>
          <Image source={item.image} style={styles.imageStyle} />
          <AppText style={styles.nameStyle}>{item.name}</AppText>
          <AppText style={styles.timeStyle}>{item.time}</AppText>
        </View>
        <View style={styles.commentWrapparStyle}>
          <AppText style={styles.commentTextStyle}>{item.comment}</AppText>
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
