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
      shadowOffset: {width: 1,height: 1,},
      shadowColor: COLORS.blackCat,
      shadowOpacity: 0.8,
      shadowRadius: 4,
    },
    textWrappar: {
      flex: 2,
    
    },
    iconWrappar: {
      flex: 1.5,
      alignItems:'flex-end',
      marginHorizontal: calcWidth(10),
    },
    textIconWrappar: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'flex-start',
    },
    image: {
      width: calcWidth(50),
      height: calcHeight(50),
      borderRadius: calcWidth(16),
      
    },
    titleStyle: {
      ...FONTS.TajawalBold,
      fontSize: calcFont(13),
    },
    loctationStyle: {
      ...FONTS.TajawalRegular,
      fontSize: calcFont(10),
      marginHorizontal: calcWidth(5),
      marginVertical: calcHeight(5),
      color: COLORS.osloGrey,
    },
    //virtcalStyle
    virtcalImageWrappar: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: calcHeight(5),
      
    },
    virtcalView: {
      flex:1,
      
    },
    textIconWrapparVirtcalStyle: {
      flexDirection: 'row',
    },
  });

  export default styles;
  