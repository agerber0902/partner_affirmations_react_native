import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import {
  Modal,
  Text,
  View,
} from "react-native";

type ModalProps = {
  header: string;
  modalContent: React.ReactNode;
  onRequestClose?: () => void;
};

const SharedModal = ({header, modalContent}: ModalProps) => {
  const styles = sharedModalStyles();


  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {}}
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
