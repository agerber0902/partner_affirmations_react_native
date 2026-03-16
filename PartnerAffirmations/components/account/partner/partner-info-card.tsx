import SharedCard from "@/components/shared/shared-card";
import { partnerInfoCardStyles } from "@/constants/stylesheets/components/account/partner/partner-info-card-styles";
import PartnerInfoRow from "./partner-info-row";
import Button from "@/components/shared/button";
import { View } from "react-native";
import AddPartnerModal from "@/components/modals/add-partner-modal";
import { useState } from "react";

const PartnerInfoCard = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  return (
    <>
      <AddPartnerModal isVisible={showAddModal} toggleVisibleState={setShowAddModal}/>

      <SharedCard
        cardContainerStyle={partnerInfoCardStyles.infoCardContainer}
        cardContentStyle={partnerInfoCardStyles.infoCardContent}
        visible={true}
      >
        <PartnerInfoRow />

        <View style={partnerInfoCardStyles.actions}>
          <Button
            viewStyle={partnerInfoCardStyles.addButton}
            title="Add Partner"
            onPress={() => setShowAddModal(true)}
          />
        </View>
      </SharedCard>
    </>
  );
};
export default PartnerInfoCard;
