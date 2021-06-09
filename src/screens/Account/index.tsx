import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
interface AccountProps {}

const Account = (props: AccountProps) => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export default Account;
