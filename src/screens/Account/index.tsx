import * as React from 'react';
import {Image, View, FlatList} from 'react-native';
import COLORS from '../../common/colors';
import ICONS from '../../common/icons';
import AppIcon from '../../component/atoms/AppIcon';
import IconWithText from '../../component/molecules/IconWithText';
import IMAGES from '../../common/images';
import styles from './styles';
import AppText from '../../component/atoms/AppText';
import {calcFont} from '../../common/styles';
import {staticData} from './data';
import {keyExtractor} from '../../utilities/key';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Log_Out} from '../../redux/actions/User';
import AppButton from '../../component/atoms/AppButton';
import {useQuery} from '@apollo/client';
import {getProfile} from '../../service';

const Account = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {data, loading, error} = useQuery(getProfile);

  console.log('loading', loading);
  console.log('error', error);
  return (
    <View style={styles.container}>
      <View style={styles.TopSectionStyle}>
        <View style={styles.imageWrappar}>
          <Image
            source={IMAGES.avatr}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.titleWrapparStyle}>
          <AppText style={styles.titleStyle}>{data?.me?.name}</AppText>
          <AppIcon
            name={ICONS.edit}
            color={COLORS.blackCat}
            size={calcFont(18)}
          />
        </View>
        <AppText> {data?.me?.email}</AppText>
      </View>
      <FlatList
        scrollEnabled={false}
        style={styles.listStyle}
        keyExtractor={keyExtractor}
        ListFooterComponent={
          <AppButton
            title={'Logout'}
            iconName={ICONS.cheveronLeft}
            onPress={() => dispatch(Log_Out())}
            buttonStyle={styles.logoutButton}
          />
        }
        data={staticData}
        renderItem={({item}) => (
          <IconWithText
            style={styles.iconWithText}
            item={item}
            onPress={() => {
              item.screen && navigate(item.screen);
            }}
          />
        )}
      />
    </View>
  );
};

export default Account;
