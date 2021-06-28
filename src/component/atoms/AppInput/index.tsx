import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './styles';
import AppText from '../../atoms/AppText';
import AppIcon from '../AppIcon';
import ICONS from '../../../common/icons';
import COLORS from '../../../common/colors';

interface InputProps {
  inputRef?: string | ((instance: TextInput | null) => void);
  label?: string;
  error?: string | undefined;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle | Array<TextStyle>;
  password?: boolean;
  maxLength?: number;
  title?: string;
  inputWrapparStyle?: ViewStyle;
  withIcon?: string;
  iconSize?: number;
  onPressIcon?: () => void;
}

export type AppInputProps = TextInputProps & InputProps;

let AppInput: React.FC<AppInputProps> = ({
  inputRef,
  error,
  containerStyle,
  inputStyle,
  label,
  password,
  maxLength,
  title,
  inputWrapparStyle,
  withIcon,
  iconSize,
  onPressIcon,
  ...props
}: AppInputProps) => {
  const style = [
    password ? styles.passWord : styles.input,
    inputStyle,
    error ? styles.errorStyle : undefined,
  ];
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      <AppText style={styles.inputHeader}>{title}</AppText>
      <View style={[styles.wrapparStyle, inputWrapparStyle]}>
        {label && (
          <AppText style={styles.lableText} numberOfLines={1}>
            {label}
          </AppText>
        )}
        <View style={styles.textInputWarppar}>
          <TextInput
            ref={inputRef}
            // placeholderTextColor={COLORS.gray}
            underlineColorAndroid={'transparent'}
            autoCapitalize={'none'}
            autoCorrect={false}
            maxLength={maxLength || 30}
            secureTextEntry={password ? !showPassword : false}
            {...props}
            style={style}
          />
          {password && (
            <AppIcon
              onPress={() => setShowPassword(!showPassword)}
              name={showPassword ? ICONS.eyeOff : ICONS.eyeOn}
              color={COLORS.steel}
              size={20}
            />
          )}
          {withIcon && (
            <AppIcon
              name={withIcon}
              color={COLORS.blackCat}
              size={iconSize || 20}
              onPress={onPressIcon}
            />
          )}
        </View>
      </View>

      {error && (
        <AppText style={styles.errorText} numberOfLines={1}>
          {error}
        </AppText>
      )}
    </View>
  );
};

export default React.memo(AppInput);
