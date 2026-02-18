import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../config/firebase";

export type FirebaseResponse = {
  user: User | undefined;
  error: string | undefined;
};

export const signUp = async (
  email: string,
  password: string,
): Promise<FirebaseResponse> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return { user: userCredential.user, error: undefined };
  } catch (error: any) {
    return { user: undefined, error: error.message.split(":")[1].trim() };
  }
};

export const signIn = async (
  email: string,
  password: string,
): Promise<FirebaseResponse> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user, error: undefined };
  } catch (error: any) {
    return { user: undefined, error: error.message.split(":")[1].trim() };
  }
};
