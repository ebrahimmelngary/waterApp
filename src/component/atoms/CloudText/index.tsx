import * as React from 'react';
import {Text, View, StyleSheet, ViewProps, ViewStyle} from 'react-native';
import styles from './styles';
import AppText from '../AppText';
import AppIcon from '../AppIcon';
import ICONS from '../../../common/icons';
import COLORS from '../../../common/colors';
interface CloudTextProps {
  tiltle?: string;
  style?: ViewStyle;
  props?: ViewProps;
  titleStyle?: string;
  withIcon?: boolean;
  iconName?: string;
}

const CloudText: React.FC<CloudTextProps> = ({
  tiltle,
  style,
  titleStyle,
  props,
  withIcon,
  iconName,
}) => {
  return (
    <View style={[styles.continar, style]}>
      <View {...props} style={styles.cloudTextWrappar}>
        <AppText style={[styles.cloudText, titleStyle]}>
          {tiltle || 'hany'}
        </AppText>
      </View>
      {withIcon && <AppIcon name={iconName} color={COLORS.steel} />}
    </View>
  );
};

export default CloudText;
