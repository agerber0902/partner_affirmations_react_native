import LoginModal from "@/components/modals/login-modal";
import { useAuth } from "@/providers/auth-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../home";
import LoadingSpinner from "@/components/shared/loading-spinner";
import Header from "@/components/header";
import { indexStyles } from "@/constants/stylesheets/index-styles";
import AffirmationCard from "@/components/affirmations/affirmation-card";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { getTodaysAffirmation } from "@/helpers/affirmation-helper";
import { setTodaysAffirmation } from "@/state/slices/affirmation";

const App = () => {
  const { user, authLoading, isAuthenticated } = useAuth();
  const styles = indexStyles;

  const dispatch = useAppDispatch();
  const { todaysAffirmation } = useAppSelector(
    (state) => state.affirmation.value,
  );

  useEffect(() => {
    const getAffirmation = async () => {
      if (isAuthenticated) {
        // Get the user's daily affirmations
        // TODO: I could do this in the backend on day change
        if (
          !todaysAffirmation ||
          todaysAffirmation.date.getDay() !== new Date().getDay()
        ) {
          dispatch(setTodaysAffirmation(await getTodaysAffirmation(user?.uid ?? "")));
        }
      }
    };

    getAffirmation();

  }, [user, isAuthenticated, todaysAffirmation, dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {authLoading && <LoadingSpinner viewStyle={styles.loadingSpinner} />}
      <Header />

      <AffirmationCard />

      {/* <LoginModal />
      {!authLoading && isAuthenticated && <Home isVisible={!authLoading && isAuthenticated}/>} */}
    </SafeAreaView>
  );
};
export default App;
