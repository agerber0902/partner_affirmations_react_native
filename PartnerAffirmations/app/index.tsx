import LoginModal from "@/components/modals/login-modal";
import { indexStyles } from "@/constants/stylesheets/index-styles";
import { useAuth } from "@/providers/auth-provider";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./home";

const App = () => {
  const styles = indexStyles();

  const { user } = useAuth();

  const isAuthenticated = user !== null;
  console.log(isAuthenticated);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Partner Affirmations</Text>
      {!isAuthenticated ? <LoginModal /> : <Home />}
    </SafeAreaView>
  );
};
export default App;
