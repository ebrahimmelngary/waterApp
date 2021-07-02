import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import ListCard from '../../component/molecules/ListCard';
import {keyExtractor} from '../../utilities/key';
import {dummyFavoriteData} from './dummyData';
import styles from './styles';
interface FavoriteProps {}

const Favorite = (props: FavoriteProps) => {
  const {navigate} = useNavigation();
  return (
    <FlatList
      numColumns={2}
      style={styles.listStyle}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.listColumnStyle}
      data={dummyFavoriteData}
      renderItem={({item}) => (
        <ListCard
          item={item}
          componentStyle={'virtcal'}
          remove
          onPress={() => navigate('DetailsScreen', {item: item})}
          onPressIcon={i => console.log(i.id)}
        />
      )}
    />
  );
};

export default Favorite;
