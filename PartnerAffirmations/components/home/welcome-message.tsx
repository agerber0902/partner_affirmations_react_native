import { welcomeStyles } from "@/constants/stylesheets/components/welcome-styles";
import { useAuth } from "@/providers/auth-provider";
import { Text } from "react-native";
import FadeInView from "../shared/fade-in-animated-view";
import { baseAnimationDuration } from "@/constants/theme";

const WelcomeMessage = () => {
  const { displayName, isAuthenticated } = useAuth();

  // Animation order goes view, then twice the amount of time as the preceeding animation
  const viewAnimationDuration = baseAnimationDuration;
  const welcomeHeaderAnimationDuration = viewAnimationDuration * 2;
  const welcomeSubHeaderAnimationDuration = welcomeHeaderAnimationDuration * 2;

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
      <FadeInView duration={viewAnimationDuration} visible={isAuthenticated}>
        <FadeInView
          duration={welcomeHeaderAnimationDuration}
          visible={isAuthenticated}
        >
          <Text id="welcome-header" style={[welcomeStyles.welcomeText]} numberOfLines={3} ellipsizeMode="tail">
            {getWelcomeMessage().welcomeMessage}
          </Text>
        </FadeInView>
        <FadeInView
          duration={welcomeSubHeaderAnimationDuration}
          visible={isAuthenticated}
        >
          <Text id="welcome-sub-header" style={welcomeStyles.welcomeSubText} numberOfLines={2} ellipsizeMode="tail">
            {getWelcomeMessage().welcomeSubMessage}
          </Text>
        </FadeInView>
      </FadeInView>
    </>
  );
};
export default WelcomeMessage;
