import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors'
import { calcFont, calcHeight, calcWidth } from '../../common/styles';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      padding: calcWidth(15),
      alignItems: 'center',
    },
    headerWrappar:{
      width: '100%',
      alignItems: 'center',
    },
    titleTextStyle: {
      width: calcWidth(300),
      marginVertical: calcHeight(20),
      fontSize: calcFont(14),
      color: COLORS.blueGrey,
      textAlign: 'center',

    },
    imageStyle: {
      width: calcWidth(72),
      height: calcHeight(72),
      borderRadius: calcWidth(16),
      backgroundColor: COLORS.white,
      marginVertical: calcHeight(5),
    },
    cloudStyle: {
      width: calcWidth(300),
      marginTop: calcHeight(10)
    },
  });
export default styles;  