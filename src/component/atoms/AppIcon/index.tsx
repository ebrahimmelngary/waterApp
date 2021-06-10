import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {ViewStyle, TouchableOpacity, StyleSheet} from 'react-native';
import icoMoonConfig from '../../../../assets/fonts/icomoon/selection.json';
import {calcFont} from '../../../common/styles';
import COLORS from '../../../common/colors';

interface Props {
  size?: number;
  name: string;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
  icommon?: boolean;
  disabled?: boolean;
}

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const AppIcon: FC<Props> = ({
  size,
  name,
  color,
  disabled,
  onPress,
  style,
  icommon,
  ...props
}) => (
  <>
    {icommon ? (
      <Icon
        {...props}
        size={size || calcFont(20)}
        name={name}
        color={color || COLORS.white}
        style={styles.icon}
      />
    ) : (
      <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
        <Icon
          {...props}
          size={size || calcFont(20)}
          name={name}
          color={color || COLORS.white}
          style={styles.icon}
        />
      </TouchableOpacity>
    )}
  </>
);
const styles = StyleSheet.create({
  icon: {
    // transform: [{ rotateY: I18nManager.isRTL ? '180deg' : '0deg' }],
  },
});
export default React.memo(AppIcon);
