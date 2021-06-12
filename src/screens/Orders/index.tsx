import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import AppText from '../../component/atoms/AppText';
import OrderCard from '../../component/molecules/OrderCard';
import {dummyOrdersData} from './dummyData';
import styles from './styles';
const state = {
  currentOrders: 'currentOrders',
  previousOrders: 'previousOrders',
};
const Orders = () => {
  const [orderState, setOrederState] = React.useState(state.currentOrders);
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const Selector = () => {
    return <View style={styles.dotStyle} />;
  };
  function loadData() {
    setLoading(true);
    try {
      if (orderState === 'currentOrders') {
        setData(dummyOrdersData.currentOrders);
        setLoading(false);
      } else {
        setData(dummyOrdersData.previousOrders);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    loadData();
  }, [orderState]);
  return (
    <>
      <View style={styles.headerWrappar}>
        <View style={styles.selectSection}>
          <AppText
            style={styles.headerText}
            onPress={() => setOrederState(state.currentOrders)}>
            Current Order
          </AppText>
          {orderState === 'currentOrders' ? <Selector /> : null}
        </View>
        <View style={styles.selectSection}>
          <AppText
            style={styles.headerText}
            onPress={() => setOrederState(state.previousOrders)}>
            previous Order
          </AppText>
          {orderState === 'currentOrders' ? null : <Selector />}
        </View>
      </View>
      {loading ? (
        <AppText>Loading...</AppText>
      ) : (
        <FlatList
          listKey={Math.random().toString()}
          keyExtractor={item => item.id}
          style={styles.listStyle}
          data={data}
          renderItem={({item}) => (
            <OrderCard item={item} onPress={i => console.log(i.id)} />
          )}
        />
      )}
    </>
  );
};

export default Orders;
