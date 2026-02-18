import LoginModal from "@/components/modals/login-modal";
import { indexStyles } from "@/constants/stylesheets/index-styles";
import { Theme } from "@/constants/theme";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const styles = indexStyles();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Partner Affirmations</Text>
      <LoginModal />
    </SafeAreaView>
  );
};
export default App;
