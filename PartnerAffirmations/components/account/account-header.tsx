import { View } from "react-native";
import Header from "../shared/header";
import { accountHeaderStyles } from "@/constants/stylesheets/components/account/account-header-styles";
import SignOutButton from "../shared/sign-out-button";

const AccountHeader = () => {
  return (
    <>
      <View style={accountHeaderStyles.mainContainer}>
        <View style={accountHeaderStyles.headerContainer}>
          <Header headerText="Account Information" subHeaderText="" />
        </View>

        <View style={accountHeaderStyles.signOutContainer}>
          <SignOutButton />
        </View>
      </View>
    </>
  );
};
export default AccountHeader;
