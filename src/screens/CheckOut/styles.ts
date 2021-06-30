import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import { calcWidth, calcHeight, calcFont } from '../../common/styles';


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        paddingHorizontal: calcWidth(17),
        
    },
    headerWrappar: {
        flexDirection: 'row',
        marginVertical: calcHeight(20),
    },
    titleStyle: {
        ...FONTS.TajawalMedium,
        fontSize: calcWidth(16),
        marginHorizontal: calcWidth(5),
    },
    imageStyle: {
        width: calcWidth(70),
        height: calcWidth(70),
        borderRadius: calcWidth(16),
        backgroundColor: COLORS.white,
        marginVertical: calcHeight(5),
        marginHorizontal: calcWidth(10),
      },
    titleWrapparStyle: {
         width:'100%',
         height: calcWidth(60),
         marginVertical: calcHeight(5),
         justifyContent: 'space-between'
      },
    cloudStyle: {
        width: calcWidth(190),
        height: calcHeight(30),
        justifyContent: 'center',
        
      },
    cloudTitleStyle: {
        width: calcWidth(140),
        height: calcHeight(40),
        justifyContent:'center',
        backgroundColor: COLORS.dodgerBlue,
        marginVertical: calcHeight(10)
    },
    cloudtextStyles: {
        color: COLORS.white,
        ...FONTS.TajawalBold,
        fontSize: calcFont(18),
    },
    detailsCloudStyle: {
        height: calcHeight(120),
        width: '95%',
        flexDirection: 'row',
        padding: calcWidth(10),
        justifyContent: 'space-between',
        
        
    },
    addressStyle: {
        ...FONTS.TajawalMedium,
        fontSize: calcFont(16),
        color: COLORS.steel,

    },
    iconTextStyle: {
        width: '75%',
        fontSize: calcFont(13),
        marginHorizontal: calcWidth(5),
        

    },
    changeText: {
        ...FONTS.TajawalBold,
        fontSize: calcFont(14),
        alignSelf: 'flex-end',
        marginBottom: calcWidth(5),
        
    },
    iconWithTextStyle: {
        marginVertical: calcHeight(10),
        
    },
    selectPaymentWrappar: {
        marginTop: calcHeight(10)
    },
    paymentMethodTitleStyle: {
        ...FONTS.TajawalBold,
        fontSize: calcFont(20)
        
    },
    paymentMethodStyle: {
        marginBottom: calcHeight(10),
        borderRadius: calcWidth(16),
        height: calcHeight(45),
        width: '95%',
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',  
        paddingHorizontal: calcWidth(20),
    },
    orderWrappar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: calcWidth(10)
    },
    orderAmountStyle: {
        width: calcWidth(150),
        alignItems:'center',
        justifyContent: 'center',
    },
    rowCardWrappar: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-between',
        padding: calcWidth(15),
    },
    rowTitleStyle: {
        ...FONTS.TajawalBold,
        fontSize: calcFont(16),
        color: COLORS.gray8D,
    },
    checkOutWrappar: {
        height:calcHeight(140),
        width: '95%',
        backgroundColor: COLORS.zircon,
        alignSelf: 'center',
        marginVertical: calcHeight(30),
        borderRadius: calcWidth(16),

     },
    hirozintalLine: {
        width: '90%',
        alignSelf: 'center',
        height: calcFont(1.5),
        backgroundColor: COLORS.gray8D,
        marginBottom: calcHeight(20)
    },
    button: {
        marginBottom: calcHeight(20),
        width: '95%',
        alignSelf: 'center'
    }
  });

export default styles;