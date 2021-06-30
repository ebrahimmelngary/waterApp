import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../../common/styles';

const styles = StyleSheet.create({
    listStyle: {
        height: calcHeight(140),
    },
    cardWrappar: {
        width: calcWidth(300),
        height: calcHeight(117),
        backgroundColor: COLORS.white,
        marginHorizontal: calcWidth(10),
        padding: calcWidth(20),
        borderRadius: calcWidth(20),
    },
    rowViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    imageStyle: {
        width: calcWidth(50),
        height: calcHeight(50),
        borderRadius: calcHeight(50),

        
    },
    nameStyle: {
        ...FONTS.TajawalBold,
        fontSize: calcFont(15),
        marginHorizontal: calcWidth(10)
    },
    timeStyle: {
        ...FONTS.TajawalMedium,
        fontSize: calcFont(12),
        
    },
    commentWrapparStyle: {
        minWidth: calcWidth(150),
        height: calcHeight(30),
        backgroundColor: COLORS.whiteGray,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: calcWidth(50),
        margin: calcHeight(10)
    },
    commentTextStyle: {
        ...FONTS.TajawalMedium,
        fontSize: calcFont(15),
        
    },
});


export default styles;