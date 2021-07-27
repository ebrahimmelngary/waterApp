import * as React from 'react';
import {View, Image, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CloudText from '../../component/atoms/CloudText';
import AppText from '../../component/atoms/AppText';
import styles from './styles';
import AppButton from '../../component/atoms/AppButton';
import {boxData} from './boxData';
import {useDispatch} from 'react-redux';
import {order} from '../../redux/actions/Order';
import {REMOVEORDER} from '../../redux/actions/actionTypes';

const OrderStatus = () => {
  const disptch = useDispatch();
  const {navigate} = useNavigation();
  const {item} = useRoute().params;
  const RowCard = ({item}) => {
    return (
      <View style={styles.rowCardWrappar}>
        <View style={{...styles.squareStyle, backgroundColor: item.color}} />
        <View>
          <AppText style={styles.rowTitleStyle}>{item.title}</AppText>
          <AppText style={styles.rowLabelStyle}>{item.label}</AppText>
        </View>
      </View>
    );
  };
  const onCancelOrder = () => {
    disptch(order({type: REMOVEORDER, data: null}));
    navigate('Home');
  };
  const DotView = () => {
    return <View style={styles.dotedViewStyle} />;
  };
  return (
    <View style={styles.container}>
      <CloudText style={styles.headerCardStyle}>
        <View style={styles.profileImageWrappar}>
          <Image source={item.image} style={styles.imageStyle} />
          <View style={styles.cardTextWrappar}>
            <AppText style={styles.profileTitleStyle}>{item.name}</AppText>
            <AppText style={styles.timeDileverStyle}>get it monday</AppText>
          </View>
        </View>
        <View style={styles.buttonWrappar}>
          <AppButton title={'Call Us'} buttonStyle={styles.button} />
          <AppButton
            title={'Cancel Order'}
            buttonStyle={styles.button}
            onPress={() => onCancelOrder()}
          />
        </View>
      </CloudText>
      <CloudText style={styles.bottomCardWrappar}>
        <FlatList
          data={boxData}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <View style={styles.separatorComponentStyle}>
              <DotView />
              <DotView />
              <DotView />
            </View>
          )}
          renderItem={({item}) => <RowCard item={item} />}
        />
      </CloudText>
    </View>
  );
};

export default OrderStatus;
