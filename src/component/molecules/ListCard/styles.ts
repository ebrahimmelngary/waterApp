import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: calcHeight(110),
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    shadowOffset: {width: 1, height: 1},
    shadowColor: COLORS.blackCat,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingVertical: calcHeight(15),
    borderRadius: calcWidth(15),
    marginBottom: calcHeight(15),
  },
  imageWrappar: {
    width: calcWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcWidth(100),
  },
  textWrappar: {
    flex: 2,
    padding: calcWidth(2.5),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconWrappar: {
    flex: 1.5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: calcWidth(10),
  },
  textIconWrappar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: calcWidth(70),
    height: calcHeight(70),
    borderRadius: calcWidth(16),
  },
  titleStyle: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(18),
    marginHorizontal: calcWidth(5),
  },
  loctationStyle: {
    ...FONTS.TajawalRegular,
    fontSize: calcFont(12),
    marginHorizontal: calcWidth(5),
    marginVertical: calcHeight(5),
    color: COLORS.osloGrey,
  },
  //virtcalStyle
  virtcalStyleWrappar: {
    backgroundColor: COLORS.white,
    shadowOffset: {width: 1, height: 1},
    shadowColor: COLORS.blackCat,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: calcWidth(155),
    height: calcHeight(250),
    flexDirection: 'column',
    padding: calcWidth(10),
    borderRadius: calcWidth(15),
    marginBottom: calcHeight(15),
  },
  textVirtcalWrappar: {
    flex: 1,
    justifyContent: 'center',
  },
  virtcalImageWrappar: {
    width: '100%',
    height: calcHeight(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: calcHeight(5),
  },
  virtcalView: {
    flex: 1,
  },
  textIconWrapparVirtcalStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: calcHeight(5),
    width: '90%',
  },
});

export default styles;
