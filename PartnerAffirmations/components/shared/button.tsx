import { Theme } from "@/constants/theme";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

type ButtonProps = {
    title: string;
    viewStyle?: ViewStyle;
    textStyle?: TextStyle;
    onPress: () => void;
}

const Button = ({title, viewStyle, textStyle, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[Theme.button, viewStyle]}>
      <Text style={[Theme.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};
export default Button;
