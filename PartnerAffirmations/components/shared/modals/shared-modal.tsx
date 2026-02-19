import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import {
  Modal,
  Text,
  View,
} from "react-native";

type ModalProps = {
  header: string;
  modalContent: React.ReactNode;
  isVisible: boolean;
  onRequestClose?: () => void;
};

const SharedModal = ({header, modalContent, isVisible, onRequestClose}: ModalProps) => {
  const styles = sharedModalStyles();


  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onRequestClose}
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
