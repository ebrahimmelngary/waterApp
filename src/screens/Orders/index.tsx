import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import OrderCard from '../../component/molecules/OrderCard';
import {dummyOrdersData} from './dummyData';
import styles from './styles';

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyOrdersData}
        renderItem={({item}) => (
          <OrderCard item={item} onPress={i => console.log(i.id)} />
        )}
      />
    </View>
  );
};

export default Orders;
