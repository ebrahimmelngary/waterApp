import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {calcWidth} from '../../common/styles';

const styles = StyleSheet.create({
  listStyle: {
    padding: calcWidth(10),
    backgroundColor: COLORS.background,
  },
  listColumnStyle: {
    justifyContent: 'space-around',
  },
});

export default styles;
