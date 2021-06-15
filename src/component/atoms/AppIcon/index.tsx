import React, {FC} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import {ViewStyle, StyleSheet} from 'react-native';
import icoMoonConfig from '../../../../assets/fonts/icomoon/selection.json';
import COLORS from '../../../common/colors';
import Touchable from '../Touchable';
import {calcFont} from '../../../common/styles';
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
      <Touchable onPress={onPress} disabled={disabled}>
        <Icon
          {...props}
          size={size || calcFont(25)}
          name={name}
          color={color || COLORS.white}
          style={styles.icon}
        />
      </Touchable>
    )}
  </>
);
const styles = StyleSheet.create({
  icon: {
    padding: calcFont(5),
  },
});
export default React.memo(AppIcon);
