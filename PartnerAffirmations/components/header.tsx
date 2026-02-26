import { headerStyles } from "@/constants/stylesheets/components/header-styles";
import { Text, View } from "react-native";
import SignOutButton from "./shared/sign-out-button";
import FadeInView from "./shared/fade-in-animated-view";
import { useAuth } from "@/providers/auth-provider";

const Header = () => {
  const styles = headerStyles();

  const {user} = useAuth();

  return (
    <FadeInView style={styles.headerContainer} duration={1000} visible={user !== undefined}>
      <Text style={styles.headerText}>Partner Affirmations</Text>
      <View style={styles.signOutContainer}>
        <SignOutButton />
      </View>
    </FadeInView>
  );
};
export default Header;
