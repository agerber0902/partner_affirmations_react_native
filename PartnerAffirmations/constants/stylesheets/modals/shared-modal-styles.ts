import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const sharedModalStyles = () =>
  StyleSheet.create({
    modalContainer: {
        width: "95%",
        maxHeight: "90%",
        flex: 1,

        margin: 0, //needed for react-native-modal
        
        alignSelf: "center",
        
    },
    modalView: {
      ...Theme.modal,

      width: "100%",
      height: "50%",


      backgroundColor: Theme.colors.secondary,
    },
    modalHeader: {
      ...Theme.fonts.header,

      width: "100%",
      textAlign: "center",
      paddingTop: 10,
      paddingBottom: 10,
    },
  });
