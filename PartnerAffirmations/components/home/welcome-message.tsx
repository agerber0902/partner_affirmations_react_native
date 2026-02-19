import { welcomeStyles } from "@/constants/stylesheets/components/welcome-styles";
import { useAuth } from "@/providers/auth-provider";
import { Text } from "react-native";

const WelcomeMessage = () => {
  const { displayName } = useAuth();
  const style = welcomeStyles();

  const getWelcomeMessage = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return `Good Morning, ${displayName}`
    } else if (currentHour >= 12 && currentHour < 17) {
      return `Good Afternoon, ${displayName}`;
    } else if (currentHour >= 17 && currentHour < 21) {
      return `Good Evening, ${displayName}`;
    } else {
      return `Hello, ${displayName}`;
    }
  };

  return (
    <>
      <Text style={style.welcomeText}>{getWelcomeMessage()}</Text>
    </>
  );
};
export default WelcomeMessage;
