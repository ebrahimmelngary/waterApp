import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../common/styles';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
      paddingVertical: calcHeight(10) ,
    },
    headerWrappar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: calcWidth(17)
    },
    iconWrappar: {
      flexDirection: 'row',
    },
   testButton: {
      width: 50,
      height: 20,
      borderColor: COLORS.Silver,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.Silver,
      margin: calcWidth(20)
      
    },
    list: {
      padding: calcWidth(17),
    },
    headrText: {
      ...FONTS.TajawalBold,
      fontSize: calcFont(18),
      color: COLORS.blackRock
    },
    iconCard: {
      width: calcWidth(34),
      height: calcHeight(34),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: calcWidth(11),
      backgroundColor: COLORS.white
    },

    
  });

  export default styles;
  