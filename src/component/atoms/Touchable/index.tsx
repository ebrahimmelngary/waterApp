import React from 'react';
import {
  TouchableOpacity,
  Pressable,
  Platform,
  PressableProps,
  TouchableOpacityProps,
  View,
} from 'react-native';
import COLORS from '../../../common/colors';
import {ACTIVE_OPACITY} from '../../../common/styles';

const Touchable = (
  props: JSX.IntrinsicAttributes &
    ((TouchableOpacityProps | Readonly<TouchableOpacityProps>) &
      PressableProps &
      React.RefAttributes<View>),
) => {
  const PlatFormTouchable =
    Platform.OS === 'android' ? Pressable : TouchableOpacity;
  return (
    <PlatFormTouchable
      activeOpacity={ACTIVE_OPACITY}
      android_ripple={{
        color: COLORS.dodgerBlue,
        borderless: true,
        radius: 20,
      }}
      {...props}
    />
  );
};

export default Touchable;
