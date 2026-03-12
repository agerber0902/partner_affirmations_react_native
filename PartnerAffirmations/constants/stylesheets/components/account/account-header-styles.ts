import { StyleSheet } from "react-native";

export const accountHeaderStyles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    width: "100%",

    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "baseline",
  },
  headerContainer: {
    display: "flex",
    width: "75%",
  },
  signOutContainer: {
    display: "flex",
    width: "25%",
  },
});
