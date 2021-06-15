import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts'
import { calcFont, calcHeight, calcWidth} from '../../../common/styles'
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: calcHeight(100),
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
      width: calcWidth(90),
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
      justifyContent: 'space-around',
    
    },
    amountWrappar: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'space-around',
      marginHorizontal: calcWidth(10),

    },
    image: {
      width: calcWidth(65),
      height: calcHeight(70),
      borderRadius: calcWidth(16),
      
    },
    titleStyle: {
      ...FONTS.TajawalBold,
      fontSize: calcFont(18),
    },
    timeStyle: {
      ...FONTS.TajawalRegular,
      fontSize: calcFont(14),
      marginHorizontal: calcWidth(5),
      marginVertical: calcHeight(5),
      color: COLORS.osloGrey,
    },
    amountText:{
      ...FONTS.TajawalBold,
      fontSize: calcFont(18),
      color: COLORS.blackRock,
      
    },
    textIconWrappar: {
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'flex-start',
    },
    loctationStyle: {
      ...FONTS.TajawalRegular,
      fontSize: calcFont(15),
      marginHorizontal: calcWidth(5),
      marginVertical: calcHeight(5),
      color: COLORS.osloGrey,
    },
    stateText:{
      ...FONTS.TajawalBlack,
      fontSize: calcFont(13),
      color: COLORS.silverSand
    },
    stateTextView: {
      width: calcWidth(90),
      height: calcHeight(25),
      backgroundColor: COLORS.background,
      borderRadius: calcWidth(16),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default styles;
  