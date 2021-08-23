import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import {calcFont, calcHeight, calcWidth} from '../../common/styles';

const styles = StyleSheet.create({
  list: {
    backgroundColor: COLORS.background,
    padding: calcWidth(12.5),
    marginBottom: calcHeight(10),
  },
  error: {
    ...FONTS.TajawalExtraBold,
    fontSize: calcFont(17),
    width: '100%',
    backgroundColor: COLORS.watermelon,
    color: COLORS.blackRock,
    textAlign: 'center',
    marginVertical: calcWidth(20),
    padding: calcFont(5),
  },
  columnWrapar: {
    justifyContent: 'flex-start',
  },
  listVirtcalCard: {
    marginHorizontal: calcWidth(10),
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default styles;
