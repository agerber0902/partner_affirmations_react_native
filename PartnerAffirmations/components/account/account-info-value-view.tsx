import { View } from "react-native";
import SharedText from "../shared/shared-text";
import { accountInfoStyles } from "@/constants/stylesheets/components/account/account-info-styles";
import SharedTextInput from "../shared/shared-text-input";

type AccountInfoValueViewProps = {
  valueField: string;
  value: string;
  isEdit: boolean;
  onChange: (text: string) => void;
};

const AccountInfoValueView = ({
  valueField,
  value,
  isEdit,
  onChange,
}: AccountInfoValueViewProps) => {

  return (
    <>
      <View style={accountInfoStyles.infoValueContainer}>
        <View style={accountInfoStyles.infoFieldContainer}>
          <View style={accountInfoStyles.infoField}>
            <SharedText
              style={accountInfoStyles.infoFieldText}
              text={valueField + ":"}
            />
          </View>
          <View style={accountInfoStyles.infoFieldValue}>
            {isEdit ? (
              <SharedTextInput
                value={value}
                placeHolder=""
                onChangeText={onChange}
              />
            ) : (
              <SharedText
                style={accountInfoStyles.infoFieldValueText}
                text={value}
              />
            )}
          </View>
        </View>
        {/* <View>
          {isEdit && (
            <Pressable>
              <Ionicons name="checkmark" />
            </Pressable>
          )}
        </View>
        <Pressable onPress={onPressed}>
          {isEdit ? <Ionicons name="close" /> : <Ionicons name="pencil" />}
        </Pressable> */}
      </View>
    </>
  );
};
export default AccountInfoValueView;
