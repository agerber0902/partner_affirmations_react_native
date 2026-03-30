import { Theme } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const createdAffirmationsCardStyles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: "100%",
  },
  noAffirmationTextContainer: {
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  noAffirmationText: {
    width: "100%",

    color: Theme.colors.primaryText,
    fontFamily: Theme.typography.fontFamily.serif,
    fontSize: Theme.typography.sizes.affirmation,
  },
});
