import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const sharedModalStyles = () =>
  StyleSheet.create({
    modalContainer: {
        width: "100%",
        maxHeight: "90%",
        flex: 1,
        
    },
    modalView: {
      ...Theme.modal,

      width: "50%",
      height: "50%",

      margin: "auto",

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
