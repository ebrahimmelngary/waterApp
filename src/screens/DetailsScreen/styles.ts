import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors'
import FONTS from '../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../common/styles';
const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: COLORS.background,
      alignItems: 'center',
      paddingVertical: calcHeight(10)
    },
    headerWrappar:{
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: calcWidth(15),
    },
    titleTextStyle: {
      width: calcWidth(300),
      marginVertical: calcHeight(20),
      fontSize: calcFont(14),
      color: COLORS.blueGrey,
      textAlign: 'center',

    },
    headerIconsCard: {
      width: calcWidth(40),
      height: calcWidth(40),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: calcWidth(16),
      backgroundColor: COLORS.white,
      marginBottom: calcHeight(10),      
    },
    imageStyle: {
      width: calcWidth(72),
      height: calcWidth(72),
      borderRadius: calcWidth(16),
      backgroundColor: COLORS.white,
      marginVertical: calcHeight(5),
    },
    cloudStyle: {
      width: calcWidth(300),
      marginTop: calcHeight(10),
      justifyContent: 'center',
    },
    cloudNameStyle: {
      ...FONTS.TajawalBold,
      alignSelf: 'center',
      fontSize: calcFont(19),
            
    },
    headerIconsWarppar: {
      position: 'absolute',
      padding: calcWidth(10),
      right: calcFont(0),
      bottom: calcHeight(20),
      
    },
    reviewWrapparStyle: {
      marginVertical: calcHeight(20),
      // height: calcHeight(200),
    },
    commentsTitle: {
      marginVertical: calcHeight(20),
      ...FONTS.TajawalExtraBold,
      fontSize: calcFont(16),
      color: COLORS.gray8D,
      paddingHorizontal: calcWidth(15),
    },
    doneButtonStyle: {
      width: calcWidth(200),
      marginBottom: calcHeight(20)
    },
    
    totalNumberStyle: {
      ...FONTS.TajawalExtraBold,
      fontSize: calcFont(20),
      color: COLORS.gray8D,
    },
    quantityTitleStyle: {
      ...FONTS.TajawalBlack,
      fontSize: calcFont(20),
      color: COLORS.gray8D,
      marginVertical: calcHeight(10)
    },
    quantityWrapparStyle: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      marginHorizontal: calcWidth(20),
      marginBottom: calcHeight(20),
    },
    priceViewStyle: {
      width: calcWidth(60),
      height: calcWidth(60),
      borderRadius: calcWidth(50),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.white,
      borderWidth: calcWidth(0.5),
      borderColor: COLORS.dodgerBlue,
    },
    reviewListHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: calcWidth(10)
    },
    seeAllText: {
      ...FONTS.TajawalBlack,
      fontSize: calcFont(20),
      color: COLORS.dodgerBlue,
    
    },
  });
export default styles;  