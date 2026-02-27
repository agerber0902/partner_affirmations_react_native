import { Platform, TextStyle, ViewStyle } from "react-native";

export const colors = {
  background: "#F4F3EE", // Primary screen background (Parchment)
  surface: "#F4E9CD", // Cards (Vanilla Cream)
  primary: "#6A8D73", // Dusty Olive (CTA + active states)
  primaryCtaText: "#F4F3EE", //Parchment to keep theme
  accent: "#7A542E", // Olive Wood (minimal usage)
  textPrimary: "#463F3A", // Taupe (main text)
  textSecondary: "rgba(70,63,58,0.65)",
  divider: "rgba(70,63,58,0.12)",
  shadow: "rgba(70,63,58,0.08)",
  loadingSpinner: "#6A8D73",
};

export const typography = {
  fontFamily: {
    serif: "Lora_400Regular",

    serifMedium: "Lora_500Medium",

    sans: "Inter_400Regular",

    sansMedium: "Inter_500Medium",
  },

  sizes: {
    greeting: 28,
    affirmation: 24,
    body: 16,
    small: 14,
    button: 16,
  },

  lineHeights: {
    affirmation: 38, // ~1.6 ratio
    body: 24,
  },

  letterSpacing: {
    subtle: 0.3,
    wide: 0.5,
  },
};

export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  xxl: 64,
};

export const radius = {
  card: 24,
  modal: 24,
  button: 20,
  full: 999,
  shadow: 20,
};
export const shadows = {
  card: {
    shadowColor: colors.accent,
    shadowOpacity: 0.08,
    shadowRadius: radius.shadow,
    shadowOffset: { width: 0, height: 8 },

    elevation: 6,
  },
  modal: {
    shadowColor: colors.accent,
    shadowOpacity: 0.08,
    shadowRadius: radius.shadow,
    shadowOffset: { width: 0, height: 8 },

    elevation: 6,
  },
  button: {
    shadowColor: colors.accent,
    shadowOpacity: 0.08,
    shadowRadius: radius.button,
    shadowOffset: { width: 0, height: 8 },

    elevation: 6,
  },
};
export const modal = {
  borderRadius: radius.modal,
  // Shadow
  ...shadows.modal,
};
export const buttons = {
  primary: {
    width: "100%",
    alignItems: "center",

    paddingVertical: 14,
    paddingHorizontal: 5,

    backgroundColor: colors.primary,
    color: colors.primaryCtaText,

    // Shadow
    ...shadows.button,

    // Font
    fontSize: typography.sizes.button,
    letterSpacing: typography.letterSpacing.subtle,
  },
};

export const inputText = {
  background: colors.surface,
  text: colors.textPrimary,
  placeholder: colors.textSecondary,
  border: "transparent",
  borderFocus: colors.primary,
  shadow: colors.accent,
};

export const motion = {
  fadeSlow: 600,
  fadeMedium: 400,
  fadeFast: 250,
  easing: "easeOut",
};

export const Theme = {
  dark: false,
  colors: colors,
  typography: typography,
  modal: modal,
  spacing: spacing,

  // Buttons
  primaryButton: buttons.primary,
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  // Text Input
  textInput: inputText,
  
  // Loading Spinner
  loadingSpinner: {
    display: "flex",
    flex: 1,

    margin: "auto",

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    color: colors.loadingSpinner,
  },

  // Safe Area Container
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
  },
};
