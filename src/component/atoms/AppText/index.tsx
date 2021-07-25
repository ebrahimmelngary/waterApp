import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: AppTextStyle;
  children: any;
  numberOfLines?: number;
  onPress?: () => void;
}
export type AppTextStyle = Array<TextStyle> | TextStyle | undefined | any;

const AppText: FC<Props> = ({
  style,
  children,
  numberOfLines,
  onPress,
  ...props
}) => (
  <Text
    numberOfLines={numberOfLines}
    style={[styles.default, style]}
    onPress={onPress}
    {...props}>
    {children}
  </Text>
);

export default React.memo(AppText);
