import { Dimensions, StyleSheet } from 'react-native';
import COLORS from './colors';

export const { width, height } = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
const defaultFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const calcWidth = (size: any) => (width / guidelineBaseWidth) * size;

export const calcHeight = (size: any) => (height / guidelineBaseHeight) * size;

// fontsize , margin , padding , iconsize , etc
// eslint-disable-next-line max-len
export const calcFont = (size: any, factor = defaultFactor) => size + (calcWidth(size) - size) * factor;

export const STYLES = StyleSheet.create({
  whiteButtonStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.main,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: calcFont(17),
  },
});

/*
 * platform/application wide metrics for proper styling
*/
// import { Dimensions, Platform } from 'react-native';
// const { width, height } = Dimensions.get('window');

// const metrics = {
//     screenWidth: width < height ? width : height,
//     screenHeight: width < height ? height : width,
//     navBarHeight: Platform.OS === 'ios' ? 54 : 66
// };

// export const calcWidthRatio = (target, parent = 375) => {
//     let ratio = ((target / parent) * 100.0).toString() + "%"
//     return ratio
// }

// export const calcWidth = (target = 375) => {

//     return metrics.screenWidth * (target / 375)
// }

// export const calcHeight = (target = 812) => {

//     return metrics.screenHeight * (target / 812)

// }

// export default metrics;
