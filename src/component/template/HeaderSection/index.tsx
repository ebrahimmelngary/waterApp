import React from 'react';
import {View} from 'react-native';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';
import {calcWidth, calcFont} from '../../../common/styles';
import {Trans} from '../../../i18n';
import AppIcon from '../../atoms/AppIcon';
import AppText from '../../atoms/AppText';
import styles from './styles';

interface HeaderSectionProps {
  viewStatus: string;
  onPressRow: () => void;
  onPressVirtcal: () => void;
  viewStyle: {
    row?: string;
    virtcal?: string;
  };
}
const HeaderSection = ({
  viewStatus,
  onPressRow,
  onPressVirtcal,
  viewStyle,
}: HeaderSectionProps) => {
  return (
    <View style={styles.headerWrappar}>
      <View>
        <AppText style={styles.headrText}>{Trans('watterCompanies')}</AppText>
      </View>
      <View style={styles.iconWrappar}>
        <View
          style={[
            styles.iconCard,
            {
              backgroundColor:
                viewStatus === viewStyle.row ? COLORS.dodgerBlue : undefined,
            },
          ]}>
          <AppIcon
            name={ICONS.row}
            color={viewStatus === viewStyle.row ? COLORS.white : COLORS.gray}
            onPress={() => onPressRow()}
            size={calcWidth(15)}
          />
        </View>
        <View
          style={[
            styles.iconCard,
            {
              backgroundColor:
                viewStatus === viewStyle.row ? undefined : COLORS.dodgerBlue,
            },
          ]}>
          <AppIcon
            name={ICONS.virtcal}
            color={viewStatus === viewStyle.row ? COLORS.gray : COLORS.white}
            onPress={() => onPressVirtcal()}
            size={viewStatus === viewStyle.row ? calcFont(14) : calcFont(19)}
          />
        </View>
      </View>
    </View>
  );
};
export default HeaderSection;
