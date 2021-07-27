import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcFont, calcWidth} from '../../../common/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  iconStyle: {
    width: calcWidth(30),
    height: calcWidth(30),
    backgroundColor: COLORS.white,
    borderRadius: calcWidth(50),
    borderWidth: calcWidth(0.5),
    borderColor: COLORS.dodgerBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrappar: {
    width: calcWidth(60),
    height: calcWidth(60),
    backgroundColor: COLORS.white,
    borderRadius: calcWidth(50),
    justifyContent: 'center',
    marginHorizontal: calcWidth(10),
    borderWidth: calcWidth(0.5),
    borderColor: COLORS.dodgerBlue,
  },
  textStyle: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(17),
    color: COLORS.gray8D,
    alignSelf: 'center',
    textAlign: 'center',

    width: '50%',
    height: '90%',
  },
});

export default styles;
