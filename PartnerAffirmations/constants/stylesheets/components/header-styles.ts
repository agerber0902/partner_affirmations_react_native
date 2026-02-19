import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const headerStyles = () =>
  StyleSheet.create({
    headerContainer: {
        display: "flex",
        width: "100%",

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        padding: 15,

    },
    headerText: {
        display: "flex",

        color: Theme.colors.primary,
        fontFamily: Theme.fonts.header.fontFamily,
        fontWeight: "500",
        fontSize: 35,
        fontStyle: "italic",
    },
    signOutContainer: {
        width: "10%",

        paddingRight: 10,
    },
});