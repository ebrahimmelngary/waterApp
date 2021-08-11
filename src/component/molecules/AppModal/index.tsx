import React, {FC} from 'react';
import Modal from 'react-native-modal';
import {View, ViewStyle} from 'react-native';
import styles from './styles';

interface Props {
  visible: boolean;
  closeModal: () => void;
  modalStyle?: ViewStyle;
  innerWrapparStyle?: ViewStyle;
  children: any;
}
const AppModal: FC<Props> = ({
  visible,
  closeModal,
  children,
  modalStyle,
  innerWrapparStyle,
}) => (
  <Modal
    isVisible={visible}
    onBackButtonPress={closeModal}
    onSwipeComplete={closeModal}
    onBackdropPress={closeModal}
    onSwipeCancel={closeModal}
    swipeDirection="down"
    backdropOpacity={0.2}
    useNativeDriver
    hideModalContentWhileAnimating
    style={[styles.modalStyle, modalStyle]}>
    <View style={[styles.innerContainer, innerWrapparStyle]}>
      <View style={styles.topBorder} />
      {children}
    </View>
  </Modal>
);

export default React.memo(AppModal);
