import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import COLORS from './colors';

export const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const calcWidth = size => (width / guidelineBaseWidth) * size;
export const calcHeight = size => (height / guidelineBaseHeight) * size;
export const calcFont = size => {
  //812 is the height for iphoneX as this is the stable and our design
  return PixelRatio.roundToNearestPixel(
    (size - 1) * (height / guidelineBaseHeight),
  );
}
export const KEY_EXTRACTOR = (item, index) => item + index.toString();

export const ACTIVE_OPACITY = 0.6;
// export const guidelineBaseWidth = 375;
// export const guidelineBaseHeight = 812;
// const defaultFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

// export const calcWidth = (size: any) => (width / guidelineBaseWidth) * size;

// export const calcHeight = (size: any) => (height / guidelineBaseHeight) * size;

// // fontsize , margin , padding , iconsize , etc
// // eslint-disable-next-line max-len
// export const calcFont = (size: any, factor = defaultFactor) => size + (calcWidth(size) - size) * factor;

// export const STYLES = StyleSheet.create({
//   whiteButtonStyle: {
//     backgroundColor: COLORS.white,
//     borderWidth: 2,
//     borderColor: COLORS.main,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//     paddingHorizontal: calcFont(17),
//   },
// });

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
