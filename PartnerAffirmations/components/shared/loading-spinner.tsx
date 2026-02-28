import { Theme } from "@/constants/theme";
import { ActivityIndicator, View, ViewStyle } from "react-native";

type LoadingSpinnerProps = {
    viewStyle: ViewStyle;
}

const LoadingSpinner = ({viewStyle} : LoadingSpinnerProps) => {
    return (
        <View style={viewStyle}>
            <ActivityIndicator size="large" color={Theme.colors.primary} />
        </View>
    );
};
export default LoadingSpinner;