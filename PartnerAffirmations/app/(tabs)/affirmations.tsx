import AffirmationHeader from "@/components/affirmations/affirmation-header";
import CreatedAffirmationCard from "@/components/affirmations/created-affirmations-card";
import LoginModal from "@/components/modals/login-modal";
import SharedSafeView from "@/components/shared/shared-safe-view";
import { getUserCreatedAffirmations } from "@/helpers/affirmation-helper";
import { useAuth } from "@/providers/auth-provider";
import { useAppDispatch } from "@/state/hooks";
import {
  setUserCreatedAffirmations,
} from "@/state/slices/affirmation";
import { useEffect } from "react";

const AffirmationsScreen = () => {
  const { user, isAuthenticated } = useAuth();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getDisplayAffirmations = async () => {
      const createdAffirmations = await getUserCreatedAffirmations(
        user?.uid ?? "0",
      );

      dispatch(setUserCreatedAffirmations(createdAffirmations));
    };

    getDisplayAffirmations();
  }, [dispatch, user]);

  return (
    <>
      {!isAuthenticated ? (
        <LoginModal />
      ) : (
        <SharedSafeView header={<AffirmationHeader />}>
          <>
            <CreatedAffirmationCard/>
          </>
        </SharedSafeView>
      )}
    </>
  );
};
export default AffirmationsScreen;
