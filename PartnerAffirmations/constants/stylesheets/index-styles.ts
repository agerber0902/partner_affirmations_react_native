import { StyleSheet, ViewStyle } from "react-native";
import { Theme } from "../theme";

export const indexStyles = StyleSheet.create({
  safeArea: Theme.safeArea,
  loadingSpinner: Theme.loadingSpinner as ViewStyle,
});
