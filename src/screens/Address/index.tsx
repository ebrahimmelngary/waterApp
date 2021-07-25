import * as React from 'react';
import {FlatList} from 'react-native';
import {calcFont, KEY_EXTRACTOR} from '../../common/styles';
import {useNavigation} from '@react-navigation/native';
import AddressCard from '../../component/molecules/AddressCard';
import styles from './styles';
import {dummyAddress} from './dummyAddress';
import AppIcon from '../../component/atoms/AppIcon';
import ICONS from '../../common/icons';
import COLORS from '../../common/colors';

const Address = () => {
  const {navigate} = useNavigation();
  const [currentAddress, setCurrentAddress] = React.useState(dummyAddress[0]);
  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={KEY_EXTRACTOR}
      data={dummyAddress}
      renderItem={({item}) => (
        <AddressCard
          item={item}
          onPress={i => setCurrentAddress(i)}
          selected={currentAddress === item}
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
};

export default Address;
