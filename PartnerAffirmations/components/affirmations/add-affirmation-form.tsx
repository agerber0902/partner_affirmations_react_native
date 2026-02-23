import { addAffirmationModalStyles } from "@/constants/stylesheets/modals/add-affirmation-modal-styles";
import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import { Theme } from "@/constants/theme";
import { Dispatch, SetStateAction, useState } from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import Button from "../shared/button";
import LoadingSpinner from "../shared/loading-spinner";
import { addAffirmation } from "@/helpers/affirmation-helper";
import { useAuth } from "@/providers/auth-provider";
import DatePicker from "../shared/date-picker";

type AddAffirmationFormProps = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const AddAffirmationForm = ({
  isLoading,
  setIsLoading,
}: AddAffirmationFormProps) => {
  const style = addAffirmationModalStyles();
  const modalStyle = sharedModalStyles();

  const { user } = useAuth();

  const [message, setMessage] = useState<string | undefined>(undefined);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [showDateModal, setShowDateModal] = useState<boolean>(false);

  const handleAdd = async () => {
    //TODO: Validate input
    if (message === undefined) {
      return;
    }

    try {
      setIsLoading(true);

      // Add to data base
      addAffirmation({ message, recipientId: user!.uid, creatorId: user!.uid, displayDate: selectedDate,});
      setMessage(undefined); // reset input
    } catch (error) {
      console.error("Failed to add affirmation:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <View style={style.form}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={modalStyle.modalContainer}
      >
        <TextInput
          value={message}
          placeholder="Enter Affirmation"
          onChangeText={setMessage}
          style={Theme.textInput}
          maxLength={100}
        />

        <View style={style.datePicker}>
          <DatePicker
            buttonText="Select Date"
            visible={showDateModal}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setVisible={setShowDateModal}
            onClose={() => setShowDateModal(false)}
            onSelect={() => {}}
          />
        </View>

        {isLoading && <LoadingSpinner viewStyle={{}} />}
        <View style={style.actions}>
          <Button
            title={isLoading ? "Loading" : "Add"}
            onPress={handleAdd}
            isDisabled={isLoading}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default AddAffirmationForm;
