import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const welcomeStyles = 
  StyleSheet.create({
    welcomeText: {
      display: "flex",
      width: "100%",

      fontFamily: Theme.typography.fontFamily.serif,
      fontSize: Theme.typography.sizes.greeting,
      color: Theme.colors.primaryText,
      marginTop: Theme.spacing.xl,
      letterSpacing: Theme.typography.letterSpacing.greeting,
    },
    welcomeSubText: {
      fontFamily: Theme.typography.fontFamily.sans,
      fontSize: Theme.typography.sizes.small,
      lineHeight: Theme.typography.lineHeights.body,
      letterSpacing: Theme.typography.letterSpacing.subtle,

      marginTop: Theme.spacing.xs,

      color: Theme.colors.primary,

      ...Theme.baseText,
    },
  });
