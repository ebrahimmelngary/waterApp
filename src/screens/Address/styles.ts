import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../common/styles';
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        padding: calcWidth(15),
        flex: 1,


    },
    footerStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: calcHeight(30),
        right: calcWidth(20)
        
    },
    addIcon: {
        width: calcWidth(40),
        height: calcWidth(40),
        borderRadius: calcWidth(50),
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: calcWidth(5),
        shadowColor:COLORS.Silver,
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    
    addTextStyle: {
        ...FONTS.TajawalExtraBold,
        color: COLORS.silverSand,
        fontSize: calcFont(35),
        
    },
  });
export default styles;
  