import LoginModal from "@/components/modals/login-modal";
import { useAuth } from "@/providers/auth-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../home";
import LoadingSpinner from "@/components/shared/loading-spinner";
import Header from "@/components/header";
import { indexStyles } from "@/constants/stylesheets/index-styles";
import AffirmationCard from "@/components/affirmations/affirmation-card";
import { Text } from "react-native";

const App = () => {
  const { user, authLoading, isAuthenticated } = useAuth();
  const styles = indexStyles;

  return (
    <SafeAreaView style={styles.safeArea}>
      {authLoading && <LoadingSpinner viewStyle={styles.loadingSpinner}/>}
      <Header/>

      <AffirmationCard/>

      {/* <LoginModal />
      {!authLoading && isAuthenticated && <Home isVisible={!authLoading && isAuthenticated}/>} */}
    </SafeAreaView>
  );
};
export default App;
