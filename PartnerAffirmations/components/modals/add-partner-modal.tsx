import { Dispatch, SetStateAction, useState } from "react";
import SharedModal from "../shared/modals/shared-modal";
import AddPartnerForm from "../account/partner/add-partner-connection-form";

type AddPartnerModalProps = {
  isVisible: boolean;
  toggleVisibleState: Dispatch<SetStateAction<boolean>>;
};
const AddPartnerModal = ({
  isVisible,
  toggleVisibleState,
}: AddPartnerModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
//TODO: validate input
  return (
    <>
      <SharedModal
        isVisible={isVisible}
        header={"Add Partner"}
        onRequestClose={() => toggleVisibleState(false)}
        onBackDropPress={
          isLoading ? undefined : () => toggleVisibleState(false)
        }
        modalContent={
          <AddPartnerForm
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            toggleViewState={toggleVisibleState}
          />
        }
      />
    </>
  );
};
export default AddPartnerModal;
