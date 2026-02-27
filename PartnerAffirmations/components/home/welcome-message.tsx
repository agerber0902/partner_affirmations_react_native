import { welcomeStyles } from "@/constants/stylesheets/components/welcome-styles";
import { Theme } from "@/constants/theme";
import { useAuth } from "@/providers/auth-provider";
import { View, Text } from "react-native";

const WelcomeMessage = () => {
  const { displayName } = useAuth();

  const getWelcomeMessage = () : {welcomeMessage: string, welcomeSubMessage: string} => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return {welcomeMessage: `Good morning, ${displayName}`, welcomeSubMessage: `Begin each day with gratitude and positivity`};
    } else if (currentHour >= 12 && currentHour < 17) {
      return { welcomeMessage: `Good afternoon, ${displayName}`, welcomeSubMessage: `Continue your day with gratitude and positivity`};
    } else if (currentHour >= 17 && currentHour < 21) {
      return {welcomeMessage: `Good evening, ${displayName}`, welcomeSubMessage: `Take a breath and reflect on the day that was`};
    } else {
      return {welcomeMessage: `Hello, ${displayName}`, welcomeSubMessage: `Take a breath to be present in the moment`};
    }
  };

  return (
    <>
      <View>
        <Text id="welcome-header" style={[welcomeStyles.welcomeText]}>{getWelcomeMessage().welcomeMessage}</Text>
        <Text id="welcome-sub-header" style={welcomeStyles.welcomeSubText}>{getWelcomeMessage().welcomeSubMessage}</Text>
      </View>
    </>
  );
};
export default WelcomeMessage;
