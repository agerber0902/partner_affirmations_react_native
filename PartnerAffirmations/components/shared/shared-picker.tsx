import { sharedPickerStyles } from "@/constants/stylesheets/components/shared/shared-picker-styles";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

type SharedPickerProps = {
  pickerValues: { label: string; value: string }[];
};

const SharedPicker = ({ pickerValues }: SharedPickerProps) => {
  return (
    <>
      <View style={sharedPickerStyles.container}>
        <Picker style={sharedPickerStyles.picker}>
          {pickerValues.map((p, index) => (
            <Picker.Item key={index} label={p.label} value={p.value} />
          ))}
        </Picker>
      </View>
    </>
  );
};
export default SharedPicker;
