import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts'
import { calcFont, calcHeight, calcWidth} from '../../../common/styles'
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: calcHeight(83),
      flexDirection: 'row',
      backgroundColor: COLORS.white,
      shadowOffset: {width: 1,height: 1,},
      shadowColor: COLORS.blackCat,
      shadowOpacity: .2,
      shadowRadius: 5,
      paddingVertical: calcHeight(15),
      borderRadius: calcWidth(15),
      marginBottom: calcHeight(10), 
      
    },
    imageWrappar: {
      width: calcWidth(80),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: calcWidth(16),
      // shadowOffset: {width: 1,height: 1,},
      // shadowColor: COLORS.blackCat,
      // shadowOpacity: 0.8,
      // shadowRadius: 4,
    },
    textWrappar: {
      flex: 2,
      justifyContent: 'center',
    
    },
    amountWrappar: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      marginHorizontal: calcWidth(10),
    },
    image: {
      width: calcWidth(50),
      height: calcHeight(50),
      borderRadius: calcWidth(16),
      
    },
    titleStyle: {
      ...FONTS.TajawalBold,
      fontSize: calcFont(15),
    },
    timeStyle: {
      ...FONTS.TajawalRegular,
      fontSize: calcFont(10),
      marginHorizontal: calcWidth(5),
      marginVertical: calcHeight(5),
      color: COLORS.osloGrey,
    },
    amountText:{
      ...FONTS.TajawalBold,
      fontSize: calcFont(14),
      color: COLORS.blackRock,
    }
  });

  export default styles;
  