import * as React from 'react';
import {View, ViewProps, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';
import AppText from '../AppText';
import AppIcon from '../AppIcon';
import COLORS from '../../../common/colors';
import {calcFont} from '../../../common/styles';
interface CloudTextProps {
  tiltle?: string;
  style?: ViewStyle;
  props?: ViewProps;
  titleStyle?: TextStyle;
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
      {withIcon && (
        <AppIcon
          name={iconName}
          color={COLORS.steel}
          disabled
          size={calcFont(27)}
        />
      )}
    </View>
  );
};

export default CloudText;
