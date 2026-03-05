import { createdAffirmationViewStyles } from "@/constants/stylesheets/components/affimations/created-affirmation-view-styles";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

type CreatedAffirmationViewProps = {
    children: React.ReactNode;
}

const CreatedAffirmationView = ({children}: CreatedAffirmationViewProps) => {
    const affirmationText = children;

    return (<>
        <View style={createdAffirmationViewStyles.container}>
            <View style={createdAffirmationViewStyles.text}>
                {affirmationText}
            </View>
            <View style={createdAffirmationViewStyles.actions}>
                <Pressable onPress={undefined}>
                    <Ionicons name="pencil" size={20} color={createdAffirmationViewStyles.actions.color} />
                </Pressable>
                <Pressable>
                    <Ionicons name="trash" size={20} color={createdAffirmationViewStyles.actions.color}/>
                </Pressable>
            </View>
        </View>
    </>);
};
export default CreatedAffirmationView;