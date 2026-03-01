import { headerStyles } from "@/constants/stylesheets/components/header-styles";
import FadeInView from "./shared/fade-in-animated-view";
import { useAuth } from "@/providers/auth-provider";
import WelcomeMessage from "./home/welcome-message";
import { baseAnimationDuration } from "@/constants/theme";

const Header = () => {
  const styles = headerStyles();

  const { user, isAuthenticated } = useAuth();

  return (
    <FadeInView
      style={styles.headerContainer}
      duration={baseAnimationDuration}
      visible={isAuthenticated}
    >
      <WelcomeMessage/>
    </FadeInView>
  );
};
export default Header;
