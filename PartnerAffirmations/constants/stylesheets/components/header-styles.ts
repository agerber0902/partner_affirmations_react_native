import { StyleSheet } from "react-native";
import { Theme } from "../../theme";

export const headerStyles = () =>
  StyleSheet.create({
    headerContainer: {
        display: "flex",
        width: "100%",
        height: "auto",

        paddingBottom: Theme.spacing.sm,

    },
});