import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import {
  Text,
  View,
} from "react-native";
import Modal from "react-native-modal";

type ModalProps = {
  header: string;
  modalContent: React.ReactNode;
  isVisible: boolean;
  onRequestClose?: () => void;
  onBackDropPress?: () => void;
};

const SharedModal = ({header, modalContent, isVisible, onRequestClose, onBackDropPress}: ModalProps) => {
  const styles = sharedModalStyles();


  return (
    <Modal
      style={styles.modalContainer}
      animationIn="slideInUp"
      isVisible={isVisible}
      avoidKeyboard={true}
      hasBackdrop={true}
      onBackdropPress={onBackDropPress}
      onBackButtonPress={onRequestClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalHeader}>
          {header}
        </Text>
        {modalContent}
      </View>
    </Modal>
  );
};
export default SharedModal;
