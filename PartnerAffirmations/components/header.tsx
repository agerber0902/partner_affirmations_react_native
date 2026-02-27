import { headerStyles } from "@/constants/stylesheets/components/header-styles";
import { Text, View } from "react-native";
import SignOutButton from "./shared/sign-out-button";
import FadeInView from "./shared/fade-in-animated-view";
import { useAuth } from "@/providers/auth-provider";
import WelcomeMessage from "./home/welcome-message";

const Header = () => {
  const styles = headerStyles();

  const { user, isAuthenticated } = useAuth();

  return (
    <FadeInView
      style={styles.headerContainer}
      duration={1000}
      visible={isAuthenticated}
    >
      <WelcomeMessage/>
    </FadeInView>
  );
};
export default Header;
