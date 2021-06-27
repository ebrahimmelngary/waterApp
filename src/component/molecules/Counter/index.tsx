import * as React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AppText from '../../atoms/AppText';
import AppIcon from '../../atoms/AppIcon';
import ICONS from '../../../common/icons';
import styles from './styles';
import COLORS from '../../../common/colors';
interface CounterProps {
  increase: () => void;
  decrease: () => void;
  value: number;
  maxValue: number;
  handleInputAmount: (val: number) => void;
}

const Counter = ({
  increase,
  decrease,
  value,
  maxValue,
  handleInputAmount,
}: CounterProps) => {
  return (
    <View style={styles.container}>
      <AppIcon
        name={ICONS.cheveronUp}
        style={styles.iconStyle}
        color={COLORS.dodgerBlue}
        onPress={() => increase()}
        disabled={maxValue == value}
      />
      <View style={styles.textWrappar}>
        <TextInput
          style={styles.textStyle}
          keyboardType={'numeric'}
          placeholder={value + 'm'}
          onChangeText={val =>
            Number(val) > maxValue ? null : handleInputAmount(Number(val))
          }
          value={value.toString()}
        />
      </View>

      <AppIcon
        name={ICONS.cheveronDown}
        style={styles.iconStyle}
        color={COLORS.dodgerBlue}
        onPress={() => decrease()}
      />
    </View>
  );
};

export default Counter;
