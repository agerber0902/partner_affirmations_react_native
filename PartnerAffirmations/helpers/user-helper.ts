import { AffirmationUser, AffirmationUserMap } from "@/constants/models/user";
import { addData } from "./firebase-helper";
import { User } from "firebase/auth";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "@/config/firebase";

const collectionName = "users";

// Add the user to the database for querying
export const addUser = async (user: User) => {
  await addData<AffirmationUser>(collectionName, {
    id: undefined,
    uid: user.uid,
    name: user.displayName ?? "",
    displayNameForPartner: user.displayName ?? "",
  });
};

export const getUser = async (id: string): Promise<AffirmationUser | undefined> => {
  const ref = collection(firestore, collectionName);
  const userQuery = query(ref, where("uid", "==", id), limit(1));
  const snapshot = await getDocs(userQuery);

  if(snapshot.empty){
    return undefined;
  }

  return AffirmationUserMap(snapshot.docs[0].data(), snapshot.docs[0].data().id);
};
