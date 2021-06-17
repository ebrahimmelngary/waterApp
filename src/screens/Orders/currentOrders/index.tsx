import * as React from 'react';
import {Text, FlatList, StyleSheet, Alert} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth} from '../../../common/styles';
import OrderCard from '../../../component/molecules/OrderCard';
import {dummyOrdersData} from '../dummyData';

const CurrentOrders = () => {
  return (
    <FlatList
      data={dummyOrdersData.currentOrders}
      style={styles.listStyle}
      renderItem={({item}) => (
        <OrderCard item={item} onPress={() => Alert.alert('redable')} />
      )}
    />
  );
};

export default CurrentOrders;

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: COLORS.background,
    paddingHorizontal: calcWidth(10),
    marginVertical: calcHeight(10),
  },
});