import { SafeAreaView } from "react-native-safe-area-context";
import LoadingSpinner from "./loading-spinner";
import React from "react";
import { useAuth } from "@/providers/auth-provider";
import { sharedSafeViewStyles } from "@/constants/stylesheets/components/shared/shared-safe-view-styles";

type SharedSafeViewProps = {
  isLoading?: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
};

const SharedSafeView = ({
  isLoading = false,
  header,
  children,
}: SharedSafeViewProps) => {
  const { isAuthenticated, authLoading } = useAuth();

  const loading = authLoading || isLoading;
  return (
    <>
      <SafeAreaView style={sharedSafeViewStyles.safeArea}>
        {loading ? (
          <LoadingSpinner viewStyle={sharedSafeViewStyles.loadingSpinner} />
        ) : (
          <>
            {isAuthenticated && header}
            {isAuthenticated && children}
          </>
        )}

        {/* {!isAuthenticated && <LoginModal />} */}
      </SafeAreaView>
    </>
  );
};
export default SharedSafeView;
