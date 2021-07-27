import * as React from 'react';
import {FlatList} from 'react-native';
import MsgCard from '../../component/molecules/MsgCard';
import {dummyNotify} from './dummyNotify';
import styles from './styles';

const Notification = () => {
  return (
    <FlatList
      style={styles.listStyle}
      data={dummyNotify}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <MsgCard item={item} />}
    />
  );
};

export default Notification;
