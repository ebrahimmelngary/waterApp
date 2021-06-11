import * as React from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import ListCard from '../../component/molecules/ListCard';
import {dummyFavoriteData} from './dummyData';
import styles from './styles';
interface FavoriteProps {}

const Favorite = (props: FavoriteProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        style={styles.listStyle}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        data={dummyFavoriteData}
        renderItem={({item}) => (
          <ListCard
            item={item}
            componentStyle={'virtcal'}
            remove
            onPress={() => Alert.alert('ready')}
            onPressIcon={i => console.log(i.id)}
          />
        )}
      />
    </View>
  );
};

export default Favorite;
