import AccountHeader from "@/components/account/account-header";
import AccountInfoValueView from "@/components/account/account-info-value-view";
import SharedCard from "@/components/shared/shared-card";
import SharedSafeView from "@/components/shared/shared-safe-view";
import { accountInfoStyles } from "@/constants/stylesheets/components/account/account-info-styles";
import { View } from "react-native";

const AccountScreen = () => {
  return (
    <SharedSafeView header={<AccountHeader />}>
      <>
        {/* Account Info Card */}
        <SharedCard cardContainerStyle={accountInfoStyles.infoCardContainer} cardContentStyle={accountInfoStyles.infoCardContent} visible={true}>
            <View style={accountInfoStyles.infoContainer}>
                <AccountInfoValueView valueField="Full Name" value="Test User"/>
                <AccountInfoValueView valueField="First Name" value="test"/>
                <AccountInfoValueView valueField="Last Name" value="user"/>
                <AccountInfoValueView valueField="Email" value="test@test.com"/>
            </View>

        </SharedCard>

        {/* Partner Info Card */}
        {/* <SharedCard/> */}
      </>
    </SharedSafeView>
  );
};
export default AccountScreen;
