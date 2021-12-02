/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {ActivityIndicator, View, FlatList} from 'react-native';
import {calcFont, KEY_EXTRACTOR} from '../../common/styles';
import {useNavigation} from '@react-navigation/native';
import AddressCard from '../../component/molecules/AddressCard';
import styles from './styles';

import AppIcon from '../../component/atoms/AppIcon';
import ICONS from '../../common/icons';
import COLORS from '../../common/colors';
import {useQuery} from '@apollo/client';
import {Get_Addresses} from '../../service';
import AppText from '../../component/atoms/AppText';
import {useDispatch, useSelector} from 'react-redux';
import {_setAddress} from '../../redux/actions/Address';

const Address = () => {
  const {navigate, addListener} = useNavigation();
  const dispatch = useDispatch();
  const {data, loading, error, refetch} = useQuery(Get_Addresses);

  const currentAddress = useSelector(state => state?.address);
  console.log('error', error);

  React.useEffect(() => {
    const refetchData = addListener('focus', async () => {
      await refetch();
    });

    return refetchData;
  }, [addListener]);
  const handleAddress = i => {
    dispatch(_setAddress(i));
  };
  if (loading) {
    return (
      <View style={[styles.container, {flex: 1, justifyContent: 'center'}]}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyExtractor={KEY_EXTRACTOR}
        data={data?.addresses}
        ListEmptyComponent={
          <AppText style={styles.addNewAddressStyle}>Add New Address</AppText>
        }
        renderItem={({item}) => (
          <AddressCard
            item={item}
            onPress={i => handleAddress(i)}
            selected={currentAddress?.id === item?.id}
          />
        )}
        ListFooterComponentStyle={styles.footerStyle}
        ListFooterComponent={
          <AppIcon
            name={ICONS.plus}
            style={styles.addIcon}
            color={COLORS.silverSand}
            size={calcFont(30)}
            onPress={() => navigate('Maps')}
          />
        }
      />
    );
  }
};

export default Address;
