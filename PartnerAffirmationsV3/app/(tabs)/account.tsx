import AccountHeader from "@/components/account/account-header";
import DisplayCard from "@/components/shared/display-card";
import { safeAreaStyle } from "@/style/stylesheets/pages/safe-area-style";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
    return (
        <>
            <SafeAreaView style={safeAreaStyle.safeArea}>
                <AccountHeader/>
                <DisplayCard/>
            </SafeAreaView>
        </>
    );
};
export default AccountScreen;