import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";

export const sharedCardStyles = StyleSheet.create({
    cardContainer: {
        ...Theme.card
    },
    cardContent: {
        margin: 'auto',
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
    },
});