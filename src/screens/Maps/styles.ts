import COLORS from '../../common/colors';
import {calcHeight, calcWidth} from '../../common/styles';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: calcWidth(20),
  },
  mapStyle: {
    width: '100%',
    height: calcHeight(300),
    alignSelf: 'center',
    borderRadius: calcWidth(16),
  },
  inputStyle: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: calcHeight(40),
    alignSelf: 'center',
  },
  inputWrappar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallRowInput: {
    width: calcWidth(105),
    height: calcHeight(40),
    backgroundColor: COLORS.white,
    marginHorizontal: calcWidth(5),
  },
  buttonStyle: {
    marginVertical: calcHeight(40),
    width: '50%',
    alignSelf: 'center',
  },
});

export default styles;
