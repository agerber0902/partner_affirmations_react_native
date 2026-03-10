import { Theme } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const accountInfoStyles = StyleSheet.create({
  infoCardContainer: {

    flex: 0.25,
  },
  infoCardContent:{
    alignItems: 'flex-start',
  },
  infoContainer: {
    display: "flex",
    width: "100%",

    // flex: 1,
    justifyContent: 'flex-start',
    flexDirection: "column",
    gap: Theme.spacing.sm,
  },
  infoValueContainer: {
    display: "flex",
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoFieldContainer: {
    display: "flex",
    width: "90%",

    flexDirection: "row",
    alignItems: 'center',
  },
  infoField: {
    display: "flex",
    maxWidth: "50%",

    flex: 1,

    paddingRight: 5,
  },
  infoFieldText: {
    color: Theme.colors.primaryText,
    fontFamily: Theme.typography.fontFamily.serif,
    fontSize: Theme.typography.sizes.accountInfoHeader,

    textAlign: 'left',
  },
  infoFieldValue: {
    display: "flex",
    width: "50%",

    flex: 2,
  },
  infoFieldValueText: {
    color: Theme.colors.primaryText,
    fontFamily: Theme.typography.fontFamily.serifMedium,
    fontSize: Theme.typography.sizes.accountInfoHeader,

    textAlign: "left",
  },
});
