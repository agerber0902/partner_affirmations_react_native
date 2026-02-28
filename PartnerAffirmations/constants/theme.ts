import { Platform, TextStyle } from "react-native";

export const colors = {
  background: '#F6F0EA',
  tabBackground: '#F6F0EA',

  card: '#fffcf9',//'#F9F2EE',

  primaryText: '#42382e',
  secondaryText: '#605b42',

  primaryButton: '#898973',
  primaryButtonText: '#F6F0EA',

  affirmation: '#6b6158',

  primary: '#898973',

  accent: "#7A542E",

  tabInactive: "#b9ac98",
  tabActive: "#8f8964",
};

export const typography = {
  fontFamily: {
    serif: "Cormorant_300Light",

    serifMedium: "Cormorant_500Medium",

    sans: "SourceSans3_400Regular",

    sansMedium: "SourceSans3_500Medium",
  },

  sizes: {
    greeting: 30,
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
    greeting: -0.2,
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
  tabs: 24,
};
export const shadows = {
  card: {
    shadowColor: colors.accent,
    shadowOpacity: 0.4,
    shadowRadius: radius.shadow,
    shadowOffset: { width: 0, height: 8 },

    elevation: 6,
  },
  modal: {
    shadowColor: colors.accent,
    shadowOpacity: 0.4,
    shadowRadius: radius.shadow,
    shadowOffset: { width: 0, height: 8 },

    elevation: 6,
  },
  button: {
    shadowColor: colors.accent,
    shadowOpacity: 0.4,
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

    backgroundColor: colors.primaryButton,
    color: colors.primaryButtonText,

    // Shadow
    ...shadows.button,

    // Font
    fontSize: typography.sizes.button,
    letterSpacing: typography.letterSpacing.subtle,
  },
};

// export const inputText = {
//   background: colors.surface,
//   text: colors.textPrimary,
//   placeholder: colors.textSecondary,
//   border: "transparent",
//   borderFocus: colors.primary,
//   shadow: colors.accent,
// };

export const motion = {
  fadeSlow: 600,
  fadeMedium: 400,
  fadeFast: 250,
  easing: "easeOut",
};

export const baseText = {
  flexShrink: 1,

  ...(Platform.OS === "web" && {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }),
  
} as TextStyle;

export const Theme = {
  dark: false,
  colors: colors,
  typography: typography,
  modal: modal,
  spacing: spacing,
  baseText: baseText,

  // Buttons
  primaryButton: buttons.primary,
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  // Text Input
  // textInput: inputText,

  // Loading Spinner
  loadingSpinner: {
    display: "flex",
    flex: 1,

    margin: "auto",

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    color: colors.primary,
  },

  // Safe Area Container
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
  },

  // Card
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    ...shadows.card,

    flex: 0.9,
  },

  // Affirmation Text
  affirmationText: {
    ...baseText,
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.sizes.affirmation,
    lineHeight: typography.lineHeights.affirmation,
    textAlign: "center",
    color: colors.affirmation,
    letterSpacing: typography.letterSpacing.subtle,
  },
};
