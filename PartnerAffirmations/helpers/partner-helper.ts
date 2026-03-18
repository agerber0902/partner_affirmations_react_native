import { PartnerConnection } from "@/constants/models/partnerConnection";
import { addData } from "./firebase-helper";
import { getUserByEmail } from "./user-helper";
import { AffirmationUser } from "@/constants/models/user";

const collectionName = "partnerConnections";

export const addPartnerConnection = async (
  user: AffirmationUser,
  email: string,
  displayName: string
) => {
  // Verify the user with that email exists
  const userConnection = await getUserByEmail(email);

  if (!userConnection) {
    return;
  }

  await createPartnerConnection(user.uid, user.name, userConnection.id!, displayName);
};

const createPartnerConnection = async (
  userId: string,
  userDisplayName: string,
  connectionUserId: string,
  connectionUserDisplayName: string

): Promise<void> => {
  const partnerConnection: PartnerConnection = {
    connectionCreatorId: userId,
    connectionCreatorDisplayName: userDisplayName,
    partnerId: connectionUserId,
    partnerDisplayName: connectionUserDisplayName,
  };
  await addData<PartnerConnection>(collectionName, partnerConnection);
  return;
};
