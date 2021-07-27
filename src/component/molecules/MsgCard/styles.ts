import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';
const styles = StyleSheet.create({
  container: {
    height: calcHeight(115),
    width: '100%',
    borderRadius: calcWidth(20),
    backgroundColor: COLORS.white,
    marginBottom: calcHeight(15),
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: calcWidth(70),
    height: calcWidth(70),
  },
  titleStyle: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(18),
    color: COLORS.blackRock,
  },
  commentStyle: {
    ...FONTS.TajawalMedium,
    fontSize: calcFont(14),
    color: COLORS.gray8D,
    width: '70%',
    marginVertical: calcHeight(5),
  },
});

export default styles;
