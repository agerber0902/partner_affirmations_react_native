import { addAffirmationModalStyles } from "@/constants/stylesheets/modals/add-affirmation-modal-styles";
import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";

const AddAffirmationForm = () => {
  const style = addAffirmationModalStyles();
  const modalStyle = sharedModalStyles();

  return (
    <View style={style.form}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={modalStyle.modalContainer}
      ></KeyboardAvoidingView>
    </View>
  );
};
export default AddAffirmationForm;
