import { createdAffirmationViewStyles } from "@/constants/stylesheets/components/affimations/created-affirmation-view-styles";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

type CreatedAffirmationViewProps = {
    children: React.ReactNode;
    affirmationId: string;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const CreatedAffirmationView = ({children, affirmationId, onEdit, onDelete}: CreatedAffirmationViewProps) => {
    const affirmationText = children;

    return (<>
        <View style={createdAffirmationViewStyles.container}>
            <View style={createdAffirmationViewStyles.text}>
                {affirmationText}
            </View>
            <View style={createdAffirmationViewStyles.actions}>
                <Pressable onPress={() => onEdit(affirmationId)}>
                    <Ionicons name="pencil" size={20} color={createdAffirmationViewStyles.actions.color} />
                </Pressable>
                <Pressable onPress={() => onDelete(affirmationId)}>
                    <Ionicons name="trash" size={20} color={createdAffirmationViewStyles.actions.color}/>
                </Pressable>
            </View>
        </View>
    </>);
};
export default CreatedAffirmationView;