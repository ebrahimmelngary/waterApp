import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {calcWidth} from '../../common/styles';

const styles = StyleSheet.create({
  listStyle: {
    padding: calcWidth(12.5),
    backgroundColor: COLORS.background,
  },
  listColumnStyle: {
    justifyContent: 'flex-start',
  },
  listVirtcalCard: {
    marginHorizontal: calcWidth(10),
  },
});

export default styles;
