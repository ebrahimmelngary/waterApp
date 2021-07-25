import {StyleSheet} from 'react-native';
import COLORS from '../../../common/colors';
import {calcHeight, calcWidth} from '../../../common/styles';

const styles = StyleSheet.create({
  container: {
    height: calcHeight(70),
    backgroundColor: COLORS.white,
    borderRadius: calcWidth(20),
    paddingHorizontal: calcWidth(15),
    marginBottom: calcHeight(15),
  },
});

export default styles;
