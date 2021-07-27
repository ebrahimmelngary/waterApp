import {Platform, StyleSheet} from 'react-native';
import {calcFont} from '../../../common/styles';

const styles = StyleSheet.create({
  default: {
    // ...FONTS.SFProTextRegular,
    fontSize: calcFont(10),
    textAlign: Platform.OS === 'ios' ? 'left' : 'auto',
  },
});

export default styles;
