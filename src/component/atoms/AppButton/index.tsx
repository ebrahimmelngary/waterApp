import React, {FC} from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import COLORS from '../../../common/colors';
import AppText from '../AppText';
import AppIcon from '../AppIcon';

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
  <TouchableOpacity
    onPress={onPress}
    disabled={loading ? true : disabled}
    activeOpacity={0.6}
    style={[styles.appButtonStyle, buttonStyle]}>
    {loading ? (
      <ActivityIndicator color={COLORS.white} />
    ) : (
      <>
        {/* <AppIcon name={iconName} /> */}
        <AppText style={[styles.textStyle, titleStyle]}>{title}</AppText>
      </>
    )}
  </TouchableOpacity>
);

export default React.memo(AppButton);
