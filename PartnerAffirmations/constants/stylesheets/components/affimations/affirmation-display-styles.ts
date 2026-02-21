import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";

export const affirmationDisplayStyles = () =>
  StyleSheet.create({
    container: {
      display: "flex",
      width: "90%",
    },
    message: {
      color: Theme.colors.primary,
      fontFamily: Theme.fonts.header.fontFamily,
      fontWeight: "300",
      fontSize: 32,
      fontStyle: "italic",
    },
  });
