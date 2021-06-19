import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../common/styles';

const styles = StyleSheet.create({
    
    headerWrappar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: calcWidth(17),
      backgroundColor: COLORS.white,
      paddingVertical: calcHeight(10) ,
      borderRadius: calcWidth(16)
    },
    iconWrappar: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    list: {
      backgroundColor: COLORS.background,
      padding: calcHeight(15),
      
      
    },
    headrText: {
      ...FONTS.TajawalExtraBold,
      fontSize: calcFont(25),
      color: COLORS.blackRock
    },
    iconCard: {
      width: calcWidth(45),
      height: calcHeight(45),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: calcWidth(12),
      backgroundColor: COLORS.blueGrey,
    },

    contentWrapper: {
      flex: 1,
      backgroundColor: COLORS.background,
      paddingBottom: calcHeight(10)
    },
  });

  export default styles;
  