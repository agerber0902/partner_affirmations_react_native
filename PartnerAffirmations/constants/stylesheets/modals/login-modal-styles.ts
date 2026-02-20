import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const loginModalStyles = () =>
  StyleSheet.create({
    loginForm: {
      display: "flex",
      width: "75%",
      minHeight: "100%",
      flex: 1,

      paddingTop: 5,

      flexDirection: "column",
      justifyContent: "flex-start",
      alignSelf: "center",
    },
    input: Theme.textInput,
    
    actions: {
      display: "flex",
      width: "50%",

      flexDirection: "column",
      alignSelf: "center",

      marginTop: "auto",
      paddingBottom: 15,
    },
    toggleAction: {
      width: "100%",

      paddingTop: 5,

      color: Theme.colors.white,
      fontStyle: "italic",
    },
    error: {
      color: Theme.colors.notification,
    },
  });
