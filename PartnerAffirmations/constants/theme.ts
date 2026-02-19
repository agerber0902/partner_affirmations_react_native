import { Platform, TextStyle, ViewStyle } from "react-native";

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const textColor = "#040303";
const cardColor = "#6A7B76";
const secondaryColor = "#8B9D83";
const primaryColor = "#BEB0A7";
const backgroundColor = "#3A4E48";

export const Theme = {
  dark: false,
  colors: {
    white: "#FFFF",
    text: textColor,
    card: cardColor,
    secondary: secondaryColor,
    background: backgroundColor,
    primary: primaryColor,
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
  modal: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#a19c9c",
    elevation: 10,
    shadowOpacity: 0.35,
    shadowRadius: 25,
  },
  button: {
    width: "100%",
    alignItems: "center",

    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: primaryColor,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  } as ViewStyle,

  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  } as TextStyle,

  fonts: Platform.select({
    web: {
      regular: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: "400",
      },
      medium: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: "500",
      },
      bold: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: "600",
      },
      heavy: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: "700",
      },
      header: {
        fontFamily: WEB_FONT_STACK,
        fontSize: 20,
      },
    },
    ios: {
      regular: {
        fontFamily: "System",
        fontWeight: "400",
      },
      medium: {
        fontFamily: "System",
        fontWeight: "500",
      },
      bold: {
        fontFamily: "System",
        fontWeight: "600",
      },
      heavy: {
        fontFamily: "System",
        fontWeight: "700",
      },
      header: {
        fontFamily: "System",
        fontSize: 20,
      },
    },
    default: {
      regular: {
        fontFamily: "sans-serif",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "sans-serif-medium",
        fontWeight: "normal",
      },
      bold: {
        fontFamily: "sans-serif",
        fontWeight: "600",
      },
      heavy: {
        fontFamily: "sans-serif",
        fontWeight: "700",
      },
      header: {
        fontFamily: "sans-serif",
        fontSize: 20,
      },
    },
  }),
};
