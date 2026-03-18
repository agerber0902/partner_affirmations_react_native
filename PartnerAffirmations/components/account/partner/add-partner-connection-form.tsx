import Button from "@/components/shared/button";
import LoadingSpinner from "@/components/shared/loading-spinner";
import SharedTextInput from "@/components/shared/shared-text-input";
import { addEditPartnerModalStyles } from "@/constants/stylesheets/modals/add-edit-partner-modal-styles";
import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import { addPartnerConnection } from "@/helpers/partner-helper";
import { useAppSelector } from "@/state/hooks";
import { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

type AddPartnerFormProps = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  toggleViewState: (t: boolean) => void;
};

const AddPartnerForm = ({
  isLoading,
  setIsLoading,
  toggleViewState,
}: AddPartnerFormProps) => {
  const { affirmationUser } = useAppSelector((state) => state.user.value);

  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const isEdit: boolean = false;

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      await addPartnerConnection(affirmationUser!, email, displayName);

      // Call get partner connections
      
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        toggleViewState(false);
      }, 1000);
    }
  };

  return (
    <>
      <View style={addEditPartnerModalStyles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={sharedModalStyles.modalContainer}
        >
          <View style={addEditPartnerModalStyles.inputs}>
            <SharedTextInput
              value={displayName}
              onChangeText={(displayName: string) =>
                setDisplayName(displayName)
              }
              placeHolder="Partner Name"
            />
            <SharedTextInput
              placeHolder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
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
export default AddPartnerForm;
