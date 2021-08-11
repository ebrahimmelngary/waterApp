import {StyleSheet} from 'react-native';
import {calcWidth, calcHeight, calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';

export default StyleSheet.create({
  modalStyle: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
  },
  innerContainer: {
    height: '40%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: calcFont(30),
    borderTopRightRadius: calcFont(30),
  },
  topBorder: {
    width: calcWidth(70),
    height: calcHeight(4),
    borderRadius: calcFont(5),
    backgroundColor: COLORS.gray,
    alignSelf: 'center',
    marginTop: calcFont(10),
  },
});
