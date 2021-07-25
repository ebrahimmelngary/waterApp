import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import {calcHeight, calcWidth} from '../../common/styles';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: calcWidth(15),
  },
  footerStyle: {
    alignSelf: 'flex-start',
    marginVertical: calcHeight(30),
  },
  addIcon: {
    borderRadius: calcWidth(50),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: calcWidth(5),
    shadowColor: COLORS.Silver,
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
export default styles;
