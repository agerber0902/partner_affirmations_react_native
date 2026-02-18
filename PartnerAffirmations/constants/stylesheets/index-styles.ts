import { StyleSheet } from "react-native";
import { Theme } from "../theme";

export const indexStyles = () =>
  StyleSheet.create({
    safeArea: {
      display: "flex",
      width: "100%",
      height: "100%",
      flex: 1,

      backgroundColor: Theme.colors.background,
    },
    loadingSpinner: {
      display: "flex",
      flex: 1, 

      margin: "auto",

      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
});