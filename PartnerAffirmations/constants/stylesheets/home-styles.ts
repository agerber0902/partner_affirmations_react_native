import { StyleSheet } from "react-native";
import { Theme } from "../theme";

export const homeStyles = () =>
  StyleSheet.create({
    homeContainer: {
      display: "flex",
      width: "100%",

      flex: 1,

      marginLeft: "auto",
      marginRight: "auto",
    },
    contentContainer: {
      flex: 1,
    },
    addButtonContainer:{
      // This is always going to be on the bottom, so we are using flex 1 in contentContainer to eat all the remaining space
      display: "flex",
      width: "100%",

      justifyContent: "flex-end",
      
      marginBottom: "10%",

    },
    addButton: {
      minWidth: "15%",
      maxWidth: "25%",

      alignSelf: "flex-end",

      borderRadius: 15,
    },
  });
