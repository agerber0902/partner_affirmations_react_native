import { headerStyles } from "@/constants/stylesheets/components/header-styles";
import { Text, View } from "react-native";
import SignOutButton from "./shared/sign-out-button";

const Header = () => {
  const styles = headerStyles();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Partner Affirmations</Text>
      <View style={styles.signOutContainer}>
        <SignOutButton />
      </View>
    </View>
  );
};
export default Header;
