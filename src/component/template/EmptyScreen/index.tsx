import React from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';
import {calcFont} from '../../../common/styles';
import {Trans} from '../../../i18n';
import AppIcon from '../../atoms/AppIcon';
import AppText from '../../atoms/AppText';

interface props {
  name?: string;
  message?: string;
  style?: ViewStyle;
  messageStyle?: TextStyle;
  onPressIcon?: () => void;
  disabled?: boolean;
}
const EmptyScreen: React.FC<props> = ({
  name,
  message,
  style,
  messageStyle,
  onPressIcon,
  disabled,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <AppIcon
          disabled={disabled}
          name={name || ICONS.search}
          size={150}
          color={COLORS.steel}
          onPress={() => onPressIcon}
        />
        <AppText style={[styles.textstyle, messageStyle]}>
          {message || Trans('noThingAvalible')}
        </AppText>
      </View>
    </View>
  );
};

export default React.memo(EmptyScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    alignSelf: 'center',
  },
  textstyle: {
    color: COLORS.gray,
    fontWeight: 'bold',
    fontSize: calcFont(16),
    alignSelf: 'center',
    marginTop: calcFont(60),
  },
});
