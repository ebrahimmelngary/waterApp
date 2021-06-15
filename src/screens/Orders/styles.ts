import {StyleSheet} from 'react-native';
import COLORS from '../../common/colors';
import FONTS from '../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../common/styles';

const styles = StyleSheet.create({
  listStyle: { 
    backgroundColor: COLORS.background,
    padding: calcWidth(17),
  },
  headerWrappar: {
    height: calcHeight(100),
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: COLORS.background
  },
  headerText: {
    ...FONTS.TajawalBold,
    fontSize: calcFont(18),
    color: COLORS.blackRock,
    
    height: calcHeight(40),
    padding: calcWidth(5),
    
  },
  dotStyle: {
    width: calcWidth(5),
    height: calcHeight(5),
    borderRadius: calcWidth(50),
    backgroundColor: COLORS.blue,
    marginVertical: calcHeight(10)
  },
  selectSection: {
    flex: 1,
    paddingVertical: calcHeight(26),
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
  export default styles;
  