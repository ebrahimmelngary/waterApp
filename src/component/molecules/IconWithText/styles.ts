import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../../common/styles';

 const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        width: '100%',
        height: calcHeight(70),
        backgroundColor: COLORS.white,
        borderRadius: calcWidth(10),
        alignItems: 'center',
        padding: calcWidth(14),
        marginTop: calcHeight(10),
    },
    titleStyle: {
        marginHorizontal: calcWidth(12),
        ...FONTS.TajawalBold,
        fontSize: calcFont(15),
        color: COLORS.silverSand,
    },
    otherIconWrappar: {
        flex: 1,
        alignItems: 'flex-end'
        
    },
});

export default styles;
