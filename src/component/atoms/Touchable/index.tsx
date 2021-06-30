import React from 'react';
import {
  TouchableOpacity,
  Pressable,
  Platform,
  PressableProps,
  TouchableOpacityProps,
} from 'react-native';
import COLORS from '../../../common/colors';
import {ACTIVE_OPACITY} from '../../../common/styles';

// export type PlatFormTouchableProps = {
//   props: PressableProps | TouchableOpacityProps;
// };
const Touchable = props => {
  const PlatFormTouchable =
    Platform.OS === 'android' ? Pressable : TouchableOpacity;
  return (
    <PlatFormTouchable
      activeOpacity={ACTIVE_OPACITY}
      android_ripple={{color: COLORS.dodgerBlue, borderless: false, radius: 0}}
      {...props}
    />
  );
};

export default Touchable;
