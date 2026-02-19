import LoginModal from "@/components/modals/login-modal";
import { indexStyles } from "@/constants/stylesheets/index-styles";
import { useAuth } from "@/providers/auth-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./home";
import LoadingSpinner from "@/components/shared/loading-spinner";
import Header from "@/components/header";

const App = () => {
  const styles = indexStyles();

  const { user, authLoading } = useAuth();

  const isAuthenticated = user !== null;
  console.log(isAuthenticated);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header/>
      {authLoading && <LoadingSpinner viewStyle={styles.loadingSpinner}/>}
      <LoginModal />
      {!authLoading && isAuthenticated && <Home isVisible={!authLoading && isAuthenticated}/>}
    </SafeAreaView>
  );
};
export default App;
