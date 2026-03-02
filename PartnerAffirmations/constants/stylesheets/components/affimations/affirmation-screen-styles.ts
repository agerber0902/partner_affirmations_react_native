import { StyleSheet, ViewStyle } from "react-native";
import { Theme } from "../../../theme";

export const affirmationScreenStyles = StyleSheet.create({
  safeArea: Theme.safeArea,
  loadingSpinner: Theme.loadingSpinner as ViewStyle,
});
