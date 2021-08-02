import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';

const styles = StyleSheet.create({
  socialLoginWrapper: {
    height: calcHeight(40),
    width: calcWidth(123),
    backgroundColor: COLORS.white,
    borderRadius: calcWidth(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  selctedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: calcWidth(20),
    paddingVertical: calcHeight(10),
  },
  iconName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectICon: {
    marginRight: calcWidth(5),
  },
  labelText: {
    ...FONTS.TajawalBlack,
    fontSize: calcFont(16),
  },
  circleWrapparView: {
    height: calcHeight(20),
    width: calcHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: calcWidth(6),
    borderRadius: calcHeight(50),
    borderWidth: calcWidth(0.5),
    borderColor: COLORS.blackRock,
  },
  circleInnerView: {
    height: calcHeight(10),
    width: calcHeight(10),
    borderRadius: calcHeight(50),
    backgroundColor: COLORS.dodgerBlue,
  },
});
export default styles;
