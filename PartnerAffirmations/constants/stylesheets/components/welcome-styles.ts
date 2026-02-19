import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const welcomeStyles = () =>
  StyleSheet.create({
    welcomeText: {
      display: "flex",
      width: "90%",

      color: Theme.colors.card,
      fontFamily: Theme.fonts.header.fontFamily,
      fontWeight: "500",
      fontSize: 30,
      fontStyle: "italic",
    },
  });
