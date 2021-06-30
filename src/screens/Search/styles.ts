import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import { calcFont, calcHeight, calcWidth } from '../../common/styles';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        
    },
    inputWrappar: {
        height: calcHeight(150),
        backgroundColor: COLORS.white,
        alignItems: 'center',
        paddingHorizontal: calcWidth(15),
        paddingVertical: calcHeight(20),
        flexDirection: 'row',
        borderBottomEndRadius: calcWidth(50),
        borderBottomStartRadius: calcWidth(50),
    },
    inputStyles:{
        height: calcHeight(50),
        width: calcWidth(260),
        backgroundColor: COLORS.background
    },
    cancelText: {
        fontSize: calcFont(16),
        marginHorizontal: calcWidth(20),
        color: COLORS.dodgerBlue,
        
        
    },
});

export default styles;