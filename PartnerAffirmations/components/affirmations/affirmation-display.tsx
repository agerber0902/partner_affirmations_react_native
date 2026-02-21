import { affirmationDisplayStyles } from "@/constants/stylesheets/components/affimations/affirmation-display-styles";
import { useAppSelector } from "@/state/hooks";
import { Animated, Text } from "react-native";

const AffirmationDisplay = () => {
    const style = affirmationDisplayStyles();

    const { todaysAffirmation } = useAppSelector((state) => state.affirmation.value);

    return (
        <>
            <Animated.View style={style.container}>
                <Text style={style.message} >{todaysAffirmation?.affirmation?.message}</Text>
            </Animated.View>
        </>
    );

};
export default AffirmationDisplay;