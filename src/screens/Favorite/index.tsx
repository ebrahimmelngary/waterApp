import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './styles';
interface FavoriteProps {}

const Favorite = (props: FavoriteProps) => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
};

export default Favorite;
