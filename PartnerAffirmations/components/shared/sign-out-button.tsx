import { signOut } from "@/helpers/firebase-helper";
import Button from "./button";
import { useAuth } from "@/providers/auth-provider";
import { Theme } from "@/constants/theme";

const SignOutButton = () => {
  const { user } = useAuth();

  const handleSignOut = async () => {
    const isSignedOut = await signOut();
    return isSignedOut;
  };

  return (
    <>{user !== null && <Button title="Sign Out" onPress={handleSignOut} viewStyle={{backgroundColor: Theme.colors.secondary}}/>}</>
  );
};
export default SignOutButton;
