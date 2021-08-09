import {useQuery} from '@apollo/client';
import * as React from 'react';
import {FlatList, StyleSheet, Alert} from 'react-native';
import {Order} from '..';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth} from '../../../common/styles';
import OrderCard from '../../../component/molecules/OrderCard';
import EmptyScreen from '../../../component/template/EmptyScreen';
import ReloadingScreen from '../../../component/template/ReloadingScreen';
import {GET_ORDERS} from '../../../service';
import {keyExtractor} from '../../../utilities/key';

// interface PrevOrdersProps {}

const PrevOrders = () => {
  const {data, loading, error, refetch} =
    useQuery<{orders: Order[]}>(GET_ORDERS);
  const getCurrentOrders = () => {
    for (let index = 0; index < data.orders.length; index++) {
      const status = data?.orders[index].status;
      if (status === 'completed') {
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
    return (
      <EmptyScreen message={error.message} onPressIcon={() => refetch()} />
    );
  }

  return (
    <FlatList
      data={getCurrentOrders()}
      style={styles.listStyle}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={({item}) => (
        <OrderCard item={item} onPress={() => Alert.alert('redable')} />
      )}
    />
  );
};

export default PrevOrders;

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: COLORS.background,
    paddingHorizontal: calcWidth(10),
    marginVertical: calcHeight(10),
  },
});
