import LoginModal from "@/components/modals/login-modal";
import { useAuth } from "@/providers/auth-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./home";
import LoadingSpinner from "@/components/shared/loading-spinner";
import Header from "@/components/header";
import { Theme } from "@/constants/theme";
import { ViewStyle } from "react-native";

const App = () => {
  const { user, authLoading, isAuthenticated } = useAuth();

  return (
    <SafeAreaView style={Theme.safeArea}>
      {authLoading && <LoadingSpinner viewStyle={Theme.loadingSpinner as ViewStyle}/>}
      <Header/>
      {/* <LoginModal />
      {!authLoading && isAuthenticated && <Home isVisible={!authLoading && isAuthenticated}/>} */}
    </SafeAreaView>
  );
};
export default App;
