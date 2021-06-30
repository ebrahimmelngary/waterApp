import * as React from 'react';
import {Text, FlatList, StyleSheet, Alert} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth} from '../../../common/styles';
import OrderCard from '../../../component/molecules/OrderCard';
import {keyExtractor} from '../../../utilities/key';
import {dummyOrdersData} from '../dummyData';

interface PrevOrdersProps {}

const PrevOrders = (props: PrevOrdersProps) => {
  return (
    <FlatList
      data={dummyOrdersData.previousOrders}
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
