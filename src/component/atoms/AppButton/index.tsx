import React, {FC} from 'react';
import {ViewStyle, TextStyle, ActivityIndicator} from 'react-native';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../AppText';
import AppIcon from '../AppIcon';
import Touchable from '../Touchable';
interface Props {
  title: string;
  onPress?: any;
  disabled?: boolean;
  iconName?: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  loading?: boolean;
}
const AppButton: FC<Props> = ({
  title,
  onPress,
  iconName,
  disabled,
  buttonStyle,
  titleStyle,
  loading,
}) => (
  <Touchable
    onPress={onPress}
    disabled={loading ? true : disabled}
    activeOpacity={0.6}
    style={[styles.appButtonStyle, buttonStyle]}>
    {loading ? (
      <ActivityIndicator color={COLORS.white} />
    ) : (
      <>
        <AppIcon name={iconName} />
        <AppText style={[styles.textStyle, titleStyle]}>{title}</AppText>
      </>
    )}
  </Touchable>
);

export default React.memo(AppButton);
