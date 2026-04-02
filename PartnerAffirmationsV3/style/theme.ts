import { DimensionValue, Platform } from "react-native";
import { colorScheme } from "./colorScheme";

// Main Theme Object
// Carries values and not style objects
export const Theme = {
  // App Color Scheme
  colorScheme: colorScheme,
  //   App Fonts
  fonts: {},
  //   Heights
  componentHeights: {
    cardHeight: (Platform.OS === "web" ? "90%" : "80%") as DimensionValue,
  },
  //   Borders
  borders: {
    cardRadius: 24,
  },
  //   Shadows
  shadows: {
    card: {
      shadowColor: colorScheme.accent,
      shadowOpacity: 0.4,
      shadowRadius: 20,
      shadowOffset: { width: 0, height: 8 },

      elevation: 6,
    },
  },
};
