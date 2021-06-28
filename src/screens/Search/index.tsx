import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import ICONS from '../../common/icons';
import {calcFont} from '../../common/styles';
import AppInput from '../../component/atoms/AppInput';
import AppText from '../../component/atoms/AppText';
import Touchable from '../../component/atoms/Touchable';
import {Trans} from '../../i18n';
import styles from './styles';
interface SearchProps {}

const Search = (props: SearchProps) => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.inputWrappar}>
        <Touchable onPress={() => navigate('Home')}>
          <AppText style={styles.cancelText}>{Trans('cancel')}</AppText>
        </Touchable>
        <AppInput
          inputWrapparStyle={styles.inputStyles}
          withIcon={ICONS.search}
          iconSize={calcFont(20)}
          onPressIcon={() => Alert.alert('search')}
        />
      </View>
    </View>
  );
};

export default Search;
