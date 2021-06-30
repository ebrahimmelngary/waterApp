import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import MsgCard from '../../component/molecules/MsgCard';
import {dummyNotify} from './dummyNotify';
import styles from './styles';

interface NotificationProps {}

const Notification = (props: NotificationProps) => {
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
