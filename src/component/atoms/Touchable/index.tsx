import React from 'react';
import {
  TouchableOpacity,
  Pressable,
  Platform,
  PressableProps,
  TouchableOpacityProps,
} from 'react-native';
import COLORS from '../../../common/colors';

// export type PlatFormTouchableProps = {
//   props: PressableProps | TouchableOpacityProps;
// };
const Touchable = props => {
  const PlatFormTouchable =
    Platform.OS === 'android' ? Pressable : TouchableOpacity;
  return (
    <PlatFormTouchable
      android_ripple={{color: COLORS.dodgerBlue, borderless: false, radius: 0}}
      {...props}
    />
  );
};

export default Touchable;
