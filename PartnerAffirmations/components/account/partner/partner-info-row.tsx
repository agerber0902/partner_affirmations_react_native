import { partnerInfoRowStyles } from "@/constants/stylesheets/components/account/partner/partner-info-row-styles";
import { Platform, useWindowDimensions, View } from "react-native";
import PartnerNameText from "./partner-name-text";
import SharedText from "@/components/shared/shared-text";
import { partnerInfoTextStyles } from "@/constants/stylesheets/components/account/partner/partner-info-text-styles";
import EditIconButton from "@/components/shared/edit-icon-button";
import DeleteIconButton from "@/components/shared/delete-icon-button";
import { PartnerConnection } from "@/constants/models/partnerConnection";
import { useEffect, useState } from "react";
import { getUser } from "@/helpers/user-helper";
import { AffirmationUser } from "@/constants/models/user";

type PartnerInfoRowProps = {
  connection: PartnerConnection;
};

const PartnerInfoRow = ({connection}: PartnerInfoRowProps) => {
  const { width } = useWindowDimensions();

  const [partnerUser, setPartnerUser] = useState<AffirmationUser | undefined>(undefined);

useEffect(() => {
  const fetchPartner = async () => {
    if (!connection?.partnerId) return;

    const partner = await getUser(connection.partnerId);
    setPartnerUser(partner);
  };

  fetchPartner();
}, [connection?.partnerId]);

  const lineBreak = Platform.OS !== "web" || width < 700;
  return (
    <>
      <View style={partnerInfoRowStyles.mainContainer}>
        <View style={partnerInfoRowStyles.partnerNameContainer}>
          <PartnerNameText partnerName={partnerUser?.name ?? ''} partnerDisplayName={connection.partnerDisplayName}/>
        </View>
        <View style={partnerInfoRowStyles.createdDateContainer}>
          {lineBreak && (
            <SharedText
              style={partnerInfoTextStyles.partnerFullName}
              text={`Partners Since:`}
            />
          )}
          <SharedText
            style={partnerInfoTextStyles.partnerFullName}
            text={`${!lineBreak ? 'Partners Since: ': ''}${connection.createdAt}`}
          />
        </View>
        <View style={partnerInfoRowStyles.actionContainer}>
          <EditIconButton onEdit={() => {}} />
          <DeleteIconButton onClick={() => {}} />
        </View>
      </View>
    </>
  );
};
export default PartnerInfoRow;
