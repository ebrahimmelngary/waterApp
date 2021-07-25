import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import {calcWidth, calcHeight, calcFont} from '../../common/styles';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: calcWidth(20),
    alignItems: 'center',
  },
  headerCardStyle: {
    width: '100%',
    height: calcWidth(150),
    justifyContent: 'space-between',
    padding: calcWidth(10),
  },
  imageStyle: {
    width: calcWidth(70),
    height: calcWidth(70),
    borderRadius: calcWidth(16),
    backgroundColor: COLORS.white,
  },
  profileImageWrappar: {
    flexDirection: 'row',
  },
  profileTitleStyle: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(17),
  },
  timeDileverStyle: {
    ...FONTS.TajawalMedium,
    fontSize: calcFont(14),
    color: COLORS.blackCat,
  },
  buttonWrappar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  cardTextWrappar: {
    justifyContent: 'space-around',
    paddingHorizontal: calcWidth(10),
    marginVertical: calcHeight(10),
  },
  button: {
    width: '40%',
    height: calcHeight(40),
  },
  bottomCardWrappar: {
    marginVertical: calcHeight(20),
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: calcHeight(10),
  },
  rowCardWrappar: {
    height: 'auto',
    width: '100%',
    padding: calcWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTitleStyle: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(16),
    marginHorizontal: calcWidth(10),
    marginBottom: calcHeight(5),
  },
  rowLabelStyle: {
    ...FONTS.TajawalRegular,
    fontSize: calcFont(16),
    color: COLORS.gray8D,
    marginHorizontal: calcWidth(10),
  },
  squareStyle: {
    width: calcWidth(50),
    height: calcWidth(50),
    borderRadius: calcWidth(16),
    shadowOpacity: 0.8,
    shadowColor: COLORS.Silver,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: calcFont(5),
  },
  dotedViewStyle: {
    height: 2,
    width: 2,
    marginBottom: 2,
    backgroundColor: COLORS.blackCat,
    marginHorizontal: calcWidth(35),
  },
  separatorComponentStyle: {
    marginVertical: calcHeight(2.5),
  },
});

export default styles;
