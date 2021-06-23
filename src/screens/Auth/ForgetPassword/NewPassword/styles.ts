import {StyleSheet} from 'react-native';
import COLORS from '../../../../common/colors';
import FONTS from '../../../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../../../common/styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: calcWidth(30),
      
    },
    headerText: {
      color: COLORS.blackCat,
      ...FONTS.TajawalMedium,
      fontSize: calcFont(20),
      marginVertical: calcHeight(40),
    },
  });

  export default styles;
  