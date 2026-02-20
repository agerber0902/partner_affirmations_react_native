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
    <Pressable onPress={onPress} style={[Theme.button, viewStyle]} disabled={isDisabled}>
      <Text style={[Theme.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};
export default Button;
