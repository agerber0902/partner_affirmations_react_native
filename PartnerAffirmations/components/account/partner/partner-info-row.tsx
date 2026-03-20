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
import {
  deletePartnerConnection,
  getPartnerConnections,
} from "@/helpers/partner-helper";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { setPartnerConnections } from "@/state/slices/partner-connection";
import LoadingSpinner from "@/components/shared/loading-spinner";

type PartnerInfoRowProps = {
  connection: PartnerConnection;
};

const PartnerInfoRow = ({ connection }: PartnerInfoRowProps) => {
  const { width } = useWindowDimensions();

  const dispatch = useAppDispatch();
  const { affirmationUser } = useAppSelector((state) => state.user.value);

  const [partnerUser, setPartnerUser] = useState<AffirmationUser | undefined>(
    undefined,
  );

  const [partnerDisplayName, setPartnerDisplayName] = useState<string>(
    connection.partnerDisplayName,
  );
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  const onDelete = async () => {
    try {
      setIsDeleteLoading(true);

      await deletePartnerConnection(connection.id!);

      // update
      const updatedConnections = await getPartnerConnections(
        affirmationUser?.uid ?? "",
      );

      dispatch(setPartnerConnections(updatedConnections));
    } finally {
      //  Add delay to make it not so jumpy
      setTimeout(() => {
        setIsDeleteLoading(false);
      }, 1000);
    }
  };

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
          <PartnerNameText
            partnerName={partnerUser?.name ?? ""}
            partnerDisplayName={connection.partnerDisplayName}
          />
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
            text={`${!lineBreak ? "Partners Since: " : ""}${connection.createdAt}`}
          />
        </View>
        <View style={partnerInfoRowStyles.actionContainer}>
          {isDeleteLoading ? (
            <LoadingSpinner viewStyle={{ padding: 5 }}/>
          ) : (
            <>
              <EditIconButton onEdit={() => {}} />
              <DeleteIconButton onClick={onDelete} />
            </>
          )}
        </View>
      </View>
    </>
  );
};
export default PartnerInfoRow;
