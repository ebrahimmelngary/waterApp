import * as React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from '../../../common/colors';
import ICONS from '../../../common/icons';
import {calcFont} from '../../../common/styles';
import {Trans} from '../../../i18n';
import AppButton from '../../atoms/AppButton';
import AppIcon from '../../atoms/AppIcon';
import AppText from '../../atoms/AppText';
import Touchable from '../../atoms/Touchable';
import AppModal from '../../molecules/AppModal';
import styles from './styles';
export type filterItem = {
  city: string;
  id: any;
};
interface FilterModalProps {
  data: Array<filterItem>;
  closeModal: () => void;
  isFilterVisible: boolean;
  onSelectCity: (item: filterItem) => void;
  isSelected?: filterItem;
  onPressDone: () => void;
}

const FilterModal = ({
  isFilterVisible,
  closeModal,
  data,
  onSelectCity,
  isSelected,
  onPressDone,
}: FilterModalProps) => {
  interface FitlerCard {
    item: filterItem;
    selected: boolean;
    onPress: (item: filterItem) => void;
  }
  const FitlerCard = ({item, selected, onPress}: FitlerCard) => {
    return (
      <Touchable onPress={() => onPress(item)} style={styles.cardWrappar}>
        <AppText key={item.id} style={styles.cityTitle}>
          {item.city}
        </AppText>
        <AppIcon
          disabled
          name={selected ? ICONS.radioChecked : ICONS.radioUnchecked}
          size={calcFont(19)}
          color={selected ? COLORS.dodgerBlue : COLORS.Silver}
        />
      </Touchable>
    );
  };
  return (
    <AppModal visible={isFilterVisible} closeModal={() => closeModal()}>
      <AppText style={styles.modalTitle}>Select City</AppText>
      <ScrollView key={'cityFilter'}>
        {data.map(value => (
          <FitlerCard
            onPress={item => onSelectCity(item)}
            item={value}
            key={value.id}
            selected={isSelected ? isSelected?.id === value?.id : false}
          />
        ))}
      </ScrollView>
      <AppButton
        title={Trans('done')}
        onPress={() => onPressDone()}
        buttonStyle={styles.doneButton}
      />
    </AppModal>
  );
};

export default FilterModal;
