import {useRoute} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, Image, ViewStyle, ViewProps} from 'react-native';
import AppIcon from '../../component/atoms/AppIcon';
import AppText from '../../component/atoms/AppText';
import ICONS from '../../common/icons';
import styles from './styles';
import COLORS from '../../common/colors';
import CloudText from '../../component/atoms/CloudText';
interface DetailsScreenProps {}
const DetailsScreen = (props: DetailsScreenProps) => {
  const {item} = useRoute().params;
  console.log(item);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrappar}>
        <Image source={item.image} style={styles.imageStyle} />
        <AppIcon name={ICONS.star} size={20} color={COLORS.gold} />
        <CloudText style={styles.cloudStyle} tiltle={'Inpoo Company'} />
      </View>
      <AppText style={styles.titleTextStyle}>
        Inpoo the best of water Company, it is depend on easy way to drink Water
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
    </View>
  );
};

export default DetailsScreen;
