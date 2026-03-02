import { sharedTextStyles } from "@/constants/stylesheets/components/shared/shared-text-styles";
import { StyleProp, Text, TextStyle } from "react-native";

type SharedTextProps = {
  text: string;
  numberOfLines?: number,
  style?: StyleProp<TextStyle>,
};
const SharedText = ({ text, numberOfLines = 1, style }: SharedTextProps) => {
  return <Text numberOfLines={numberOfLines} ellipsizeMode="tail" style={[sharedTextStyles.text, style]}>{text}</Text>;
};
export default SharedText;
