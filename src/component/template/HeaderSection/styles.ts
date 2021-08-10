import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
const styles = StyleSheet.create({
  headerWrappar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: calcWidth(17),
    paddingVertical: calcHeight(10),
    borderRadius: calcWidth(16),
  },
  iconWrappar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headrText: {
    ...FONTS.TajawalExtraBold,
    fontSize: calcFont(25),
    color: COLORS.blackRock,
  },
  iconCard: {
    width: calcWidth(45),
    height: calcWidth(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: calcWidth(12),
    backgroundColor: COLORS.blueGrey,
  },
});

export default styles;
