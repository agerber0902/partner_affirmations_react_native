import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const welcomeStyles = () =>
  StyleSheet.create({
    welcomeText: {
      display: "flex",
      width: "90%",

      color: Theme.colors.primary,
      fontFamily: Theme.fonts.header.fontFamily,
      fontWeight: "300",
      fontSize: 32,
      fontStyle: "italic",
    },
  });
