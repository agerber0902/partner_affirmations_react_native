import AffirmationHeader from "@/components/affirmations/affirmation-header";
import DisplayCard from "@/components/shared/display-card";
import { safeAreaStyle } from "@/style/stylesheets/pages/safe-area-style";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AffirmationsModal from "../modals/affirmations-modal";
import { Text } from "react-native";
import UserCreatedAffirmationView from "@/components/affirmations/user-created-affirmation-view";

const AffirmationsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);


  const onBackDrop = () => {
    setIsModalVisible(false);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <AffirmationsModal
        isVisible={isModalVisible}
        onBackDrop={onBackDrop}
        onClose={onModalClose}
      />

      <SafeAreaView style={safeAreaStyle.safeArea}>
        <AffirmationHeader />
        <UserCreatedAffirmationView/>
      </SafeAreaView>
    </>
  );
};
export default AffirmationsScreen;
