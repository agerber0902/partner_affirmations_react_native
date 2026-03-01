import { Theme } from "@/constants/theme";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

type ButtonProps = {
    title: string;
    viewStyle?: ViewStyle;
    textStyle?: TextStyle;
    onPress: () => void;
    isDisabled?: boolean;
}

const Button = ({title, viewStyle, textStyle, onPress, isDisabled = false}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[Theme.primaryButton as ViewStyle, viewStyle]} disabled={isDisabled}>
      <Text numberOfLines={2} ellipsizeMode="tail" style={[Theme.primaryButtonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};
export default Button;
