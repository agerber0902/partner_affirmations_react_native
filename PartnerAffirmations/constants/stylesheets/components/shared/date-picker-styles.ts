import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";

export const datePickerStyles = () =>
  StyleSheet.create({
    openButtonText: {

        fontStyle: "italic",

        textDecorationStyle: "solid",
        textDecorationColor: Theme.colors.white,
        textDecorationLine: "underline",

        color: Theme.colors.white
    },
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: "30%",
      backgroundColor: Theme.colors.white,
      borderRadius: 12,
      padding: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    monthText: {
      fontSize: 18,
      fontWeight: "bold",
      color: Theme.colors.background,
    },
    weekRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 8,
    },
    weekDay: {
      width: 40,
      textAlign: "center",
      fontWeight: "600",
      color: Theme.colors.background,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    dayCell: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      margin: 2,
      borderRadius: 20,
      color: Theme.colors.background,
    },
    dayText:{
      color: Theme.colors.background,},
    selectedDay: {
      backgroundColor: Theme.colors.primary,
    },
    selectedText: {
      color: "white",
      fontWeight: "bold",
    },
    closeText: {
      textAlign: "center",
      marginTop: 12,
      color: Theme.colors.secondary
    },
  });
