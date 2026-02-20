import { useState } from "react";
import SharedModal from "../shared/modals/shared-modal";
import AddAffirmationForm from "../affirmations/add-affirmation-form";

type AddAffirmationModalProps = {
    isVisible: boolean;
    toggleVisibleState: () => void;
}

const AddAffirmationModal = ({isVisible, toggleVisibleState}: AddAffirmationModalProps) => {

  return (
    <SharedModal
      isVisible={isVisible}
      header={"Add Affirmation"}
      onRequestClose={toggleVisibleState}
      onBackDropPress={toggleVisibleState}
      modalContent={
        <AddAffirmationForm/>
      }
    />
  );
};
export default AddAffirmationModal;
