import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth} from '../../../common/styles';
import OrderCard from '../../../component/molecules/OrderCard';
import {keyExtractor} from '../../../utilities/key';
import {useQuery} from '@apollo/client';
import {GET_ORDERS} from '../../../service';
import EmptyScreen from '../../../component/template/EmptyScreen';
import ReloadingScreen from '../../../component/template/ReloadingScreen';
import {Order} from '..';
const CurrentOrders = () => {
  const {data, loading, error, refetch} =
    useQuery<{orders: Order[]}>(GET_ORDERS);
  const getCurrentOrders = () => {
    for (let index = 0; index < data.orders.length; index++) {
      const status = data?.orders[index].status;
      if (status === 'pending') {
        return data?.orders;
      }
      if (status === 'accepted') {
        return data?.orders;
      } else {
        return null;
      }
    }
  };
  if (loading) {
    return <ReloadingScreen />;
  }
  if (error) {
    console.log('error', error);
    return (
      <EmptyScreen message={error.message} onPressIcon={() => refetch()} />
    );
  }

  if (data) {
    return (
      <FlatList
        data={getCurrentOrders()}
        ListEmptyComponent={<EmptyScreen />}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={styles.listStyle}
        renderItem={({item}) => <OrderCard item={item} disabled />}
      />
    );
  }
  return null;
};

export default CurrentOrders;

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: COLORS.background,
    paddingHorizontal: calcWidth(10),
    marginVertical: calcHeight(10),
  },
});
