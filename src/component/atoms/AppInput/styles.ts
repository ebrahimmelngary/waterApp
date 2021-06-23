import {StyleSheet, I18nManager} from 'react-native';
import COLORS from '../../../common/colors';
import FONTS from '../../../common/fonts';
import { calcFont, calcHeight, calcWidth } from '../../../common/styles';



export default StyleSheet.create({
  container: {
    marginBottom: calcHeight(15),
  },
  input: {
    ...FONTS.TajawalRegular,
    textAlign: I18nManager.isRTL ? 'right' : null,
    fontSize: calcFont(18),
    height: calcHeight(50),
    width: '100%',
    paddingTop: calcHeight(5),
  },
  inputHeader: {
    color: COLORS.gray,
    marginBottom: calcHeight(4),
    fontSize: calcFont(13),
  },

  wrapparStyle: {
    borderRadius: calcWidth(16),
    borderWidth: 0.2,
    borderColor: COLORS.steel,
    paddingHorizontal: calcWidth(25),
    paddingVertical: calcHeight(9),
  },
  textInputWarppar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  errorText: {
    color: COLORS.watermelon,
    fontSize: calcFont(12),
    marginTop: calcHeight(5),
    marginHorizontal: calcWidth(7),
  },
  passWord: {
    ...FONTS.TajawalRegular,
    textAlign: I18nManager.isRTL ? 'right' : null,
    fontSize: calcFont(18),
    height: calcHeight(50),
    width: '90%',
    marginHorizontal: 10 ,
    paddingTop: calcHeight(5),
  },
  lableText: {
    ...FONTS.TajawalRegular,
    fontSize: calcFont(14),
    marginBottom: calcHeight(-15),
    color: '#9DA8C3',
  },
});
