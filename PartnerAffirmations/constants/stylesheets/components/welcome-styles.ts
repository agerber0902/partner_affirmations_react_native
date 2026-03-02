import { StyleSheet } from "react-native";
import { headerStyles } from "./header-styles";

export const welcomeStyles = 
  StyleSheet.create({
    welcomeText: {
      ...headerStyles.headerText
    },
    welcomeSubText: {
      ...headerStyles.headerSubText
    },
  });
