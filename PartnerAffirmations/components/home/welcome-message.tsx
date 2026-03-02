import { welcomeStyles } from "@/constants/stylesheets/components/welcome-styles";
import { useAuth } from "@/providers/auth-provider";
import { Text } from "react-native";
import FadeInView from "../shared/fade-in-animated-view";
import { baseAnimationDuration } from "@/constants/theme";
import Header from "../shared/header";
import SharedText from "../shared/shared-text";

const WelcomeMessage = () => {
  const { displayName, isAuthenticated } = useAuth();

  const getWelcomeMessage = (): {
    welcomeMessage: string;
    welcomeSubMessage: string;
  } => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return {
        welcomeMessage: `Good morning, ${displayName}`,
        welcomeSubMessage: `Begin each day with gratitude and positivity`,
      };
    } else if (currentHour >= 12 && currentHour < 17) {
      return {
        welcomeMessage: `Good afternoon, ${displayName}`,
        welcomeSubMessage: `Continue your day with gratitude and positivity`,
      };
    } else if (currentHour >= 17 && currentHour < 21) {
      return {
        welcomeMessage: `Good evening, ${displayName}`,
        welcomeSubMessage: `Take a breath and reflect on the day that was`,
      };
    } else {
      return {
        welcomeMessage: `Hello, ${displayName}`,
        welcomeSubMessage: `Take a breath to be present in the moment`,
      };
    }
  };

  return (
    <>
      <Header
        headerText={getWelcomeMessage().welcomeMessage}
        subHeaderText={getWelcomeMessage().welcomeSubMessage}
        headerStyle={welcomeStyles.welcomeText}
        subHeaderStyle={welcomeStyles.welcomeSubText}
      />
    </>
  );
};
export default WelcomeMessage;
