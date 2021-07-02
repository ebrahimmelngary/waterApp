import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import COLORS from '../../common/colors';
import ICONS from '../../common/icons';
import {calcFont} from '../../common/styles';
import AppIcon from '../../component/atoms/AppIcon';
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
        <AppIcon
          name={ICONS.arrowleft}
          color={COLORS.blackCat}
          size={calcFont(25)}
          onPress={() => navigate('Home')}
        />
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
