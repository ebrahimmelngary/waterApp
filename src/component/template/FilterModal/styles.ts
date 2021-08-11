import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';
const styles = StyleSheet.create({
  modalTitle: {
    ...FONTS.TajawalBold,
    color: COLORS.blue,
    fontSize: calcFont(17),
    alignSelf: 'center',
    marginVertical: calcHeight(15),
  },
  cardWrappar: {
    width: '80%',
    height: calcHeight(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: calcWidth(5),
    borderBottomWidth: calcWidth(0.2),
    borderBottomColor: COLORS.blackRock,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  cityTitle: {
    ...FONTS.TajawalMedium,
    color: COLORS.blackRock,
    fontSize: calcFont(15),
  },
  doneButton: {
    position: 'absolute',
    bottom: calcHeight(18),
    width: '90%',
    alignSelf: 'center',
  },
});
export default styles;
