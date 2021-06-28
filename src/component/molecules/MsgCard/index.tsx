import * as React from 'react';
import {Image, View} from 'react-native';
import IMAGES from '../../../common/images';
import AppText from '../../atoms/AppText';
import Touchable from '../../atoms/Touchable';
import styles from './styles';
interface MsgCardProps {
  item: {
    id: number;
    title: string;
    comment: string;
    image: string;
  };
}

const MsgCard = ({item}: MsgCardProps) => {
  return (
    <Touchable style={styles.container}>
      <Image source={IMAGES.call} style={styles.image} />
      <View>
        <AppText style={styles.titleStyle}>{item.title}</AppText>
        <AppText style={styles.commentStyle}>{item.comment}</AppText>
      </View>
    </Touchable>
  );
};

export default MsgCard;
