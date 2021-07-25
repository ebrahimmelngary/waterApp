import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../../common/styles';

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: calcWidth(30),
      // justifyContent: 'center',
    },
    headerText: {
      color: COLORS.blackCat,
      ...FONTS.TajawalMedium,
      fontSize: calcFont(20),
      marginVertical: calcHeight(40),
    },
    buttonWrapper: {
      marginVertical: calcHeight(20)
    },
    signupTextStyle: {
      color: COLORS.steel,
      ...FONTS.TajawalMedium,
      fontSize: calcFont(16),
      alignSelf: 'center',
      marginVertical: calcHeight(20),
    },
  });

  export default styles;
  