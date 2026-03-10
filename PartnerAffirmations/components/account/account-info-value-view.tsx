import { View } from "react-native";
import SharedText from "../shared/shared-text";
import { Ionicons } from "@expo/vector-icons";
import { accountInfoStyles } from "@/constants/stylesheets/components/account/account-info-styles";

type AccountInfoValueViewProps = {
  valueField: string;
  value: string;
};

const AccountInfoValueView = ({
  valueField,
  value,
}: AccountInfoValueViewProps) => {
  return (
    <>
      <View style={accountInfoStyles.infoValueContainer}>
        <View style={accountInfoStyles.infoFieldContainer}>
          <View style={accountInfoStyles.infoField}>
            <SharedText style={accountInfoStyles.infoFieldText} text={valueField + ":"} />
          </View>
          <View style={accountInfoStyles.infoFieldValue}>
            <SharedText style={accountInfoStyles.infoFieldValueText} text={value} />
          </View>
        </View>
        <Ionicons name="pencil" />
      </View>
    </>
  );
};
export default AccountInfoValueView;
