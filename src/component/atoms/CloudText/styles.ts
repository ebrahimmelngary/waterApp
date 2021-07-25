import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcFont, calcHeight, calcWidth} from '../../../common/styles';
const styles = StyleSheet.create({
  continar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cloudTextWrappar: {
    width: '90%',
    height: calcHeight(35),
    backgroundColor: COLORS.white,
    paddingHorizontal: calcWidth(15),
    borderRadius: calcWidth(19),
    marginHorizontal: calcWidth(5),
  },
  cloudText: {
    fontSize: calcFont(14),
    color: COLORS.steel,
  },
});

export default styles;
