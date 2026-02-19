import { signOut } from "@/helpers/firebase-helper";
import Button from "./button";
import { useAuth } from "@/providers/auth-provider";

const SignOutButton = () => {
  const { user } = useAuth();

  const handleSignOut = async () => {
    const isSignedOut = await signOut();
    return isSignedOut;
  };

  return (
    <>{user !== null && <Button title="Sign Out" onPress={handleSignOut} />}</>
  );
};
export default SignOutButton;
