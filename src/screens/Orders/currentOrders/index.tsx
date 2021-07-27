import * as React from 'react';
import {FlatList, StyleSheet, Alert} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth} from '../../../common/styles';
import OrderCard from '../../../component/molecules/OrderCard';
import {keyExtractor} from '../../../utilities/key';
import {dummyOrdersData} from '../dummyData';

const CurrentOrders = () => {
  return (
    <FlatList
      data={dummyOrdersData.currentOrders}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
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
