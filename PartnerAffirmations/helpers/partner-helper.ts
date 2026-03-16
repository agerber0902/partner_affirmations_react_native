import { PartnerConnection } from "@/constants/models/partnerConnection";
import { addData } from "./firebase-helper";
import { getUserByEmail } from "./user-helper";
import { AffirmationUser } from "@/constants/models/user";

const collectionName = "parterConnections";

export const addPartnerConnection = async (
  user: AffirmationUser,
  email: string,
) => {
  // Verify the user with that email exists
  const userConnection = await getUserByEmail(email);

  if (!userConnection) {
    return;
  }

  await createPartnerConnection(user, userConnection);
};

const createPartnerConnection = async (
  user: AffirmationUser,
  connectionUser: AffirmationUser,
): Promise<void> => {
  const partnerConnection: PartnerConnection = {
    connectionCreatorId: user.uid,
    connectionCreatorDisplayName: user.displayNameForPartner,
    partnerId: connectionUser.uid,
    partnerDisplayName: connectionUser.displayNameForPartner,
  };
  await addData<PartnerConnection>(collectionName, partnerConnection);
  return;
};
