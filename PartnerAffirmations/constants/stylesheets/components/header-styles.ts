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
        fontWeight: "700",
        fontSize: 35,
        fontStyle: "italic",
    },
    signOutContainer: {
        minWidth: "20%",

        paddingRight: 10,
    },
});