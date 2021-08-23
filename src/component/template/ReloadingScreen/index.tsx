import * as React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import COLORS from '../../../common/colors';
import {calcFont} from '../../../common/styles';
import AppText from '../../atoms/AppText';

const ReloadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.dodgerBlue} size={calcFont(50)} />
      <AppText>Loading...</AppText>
    </View>
  );
};

export default ReloadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
});
