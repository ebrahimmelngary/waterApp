import * as React from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';
import {KEY_EXTRACTOR} from '../../common/styles';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../component/atoms/AppText';
import Touchable from '../../component/atoms/Touchable';
import AddressCard from '../../component/molecules/AddressCard';
import styles from './styles';
import {dummyAddress} from './dummyAddress';
interface AddressProps {}

const Address = (props: AddressProps) => {
  const {navigate} = useNavigation();
  const [currentAddress, setCurrentAddress] = React.useState(dummyAddress[0]);
  console.log(currentAddress);
  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={KEY_EXTRACTOR}
      data={dummyAddress}
      renderItem={({item}) => (
        <AddressCard
          item={item}
          onPress={i => setCurrentAddress(i)}
          selected={currentAddress == item}
        />
      )}
      ListFooterComponentStyle={styles.footerStyle}
      ListFooterComponent={
        <Touchable style={styles.addIcon} onPress={() => navigate('Maps')}>
          <AppText style={styles.addTextStyle}>+</AppText>
        </Touchable>
      }
    />
  );
};

export default Address;
