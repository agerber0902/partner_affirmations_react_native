import Button from "@/components/shared/button";
import LoadingSpinner from "@/components/shared/loading-spinner";
import SharedTextInput from "@/components/shared/shared-text-input";
import { PartnerConnection } from "@/constants/models/partnerConnection";
import { addEditPartnerModalStyles } from "@/constants/stylesheets/modals/add-edit-partner-modal-styles";
import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

type AddEditPartnerFormProps = {
  partnerConnection: PartnerConnection;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  toggleViewState: (t: boolean) => void;
};

const AddEditPartnerForm = ({
  partnerConnection,
  isLoading,
  setIsLoading,
  toggleViewState,
}: AddEditPartnerFormProps) => {
  const dispatch = useAppDispatch();

    // const [displayName, setDisplayName] = useState<string>(partnerConnection.);

  const isEdit: boolean = false;

  const handleAdd = () => {};

  return (
    <>
      <View style={addEditPartnerModalStyles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={sharedModalStyles.modalContainer}
        >
          <View style={addEditPartnerModalStyles.inputs}>
            <SharedTextInput
              value={message}
              onChangeText={(message: string) => setMessage(message)}
              placeHolder="Enter Affirmation"
            />
          </View>

          {isLoading && <LoadingSpinner viewStyle={{ padding: 5 }} />}
          <View style={addEditPartnerModalStyles.actions}>
            <Button
              title={isLoading ? "Loading" : isEdit ? "Save" : "Add"}
              onPress={handleAdd}
              isDisabled={isLoading}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default AddEditPartnerForm;
