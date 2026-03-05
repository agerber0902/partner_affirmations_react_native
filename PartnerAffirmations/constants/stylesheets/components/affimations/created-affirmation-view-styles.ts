import { Theme } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createdAffirmationViewStyles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        width: '75%',

        paddingLeft: 8,
    },
    actions: {
        width: '25%',
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'space-evenly',

        paddingLeft: 5,

        color: Theme.colors.primary,
    },
});