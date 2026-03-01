import LoadingSpinner from "@/components/shared/loading-spinner";
import { affirmationScreenStyles } from "@/constants/stylesheets/components/affimations/affirmation-screen-styles";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AffirmationsScreen = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return <>
        <SafeAreaView style={affirmationScreenStyles.safeArea}>
            {isLoading && <LoadingSpinner viewStyle={affirmationScreenStyles.loadingSpinner}/>}
        </SafeAreaView>
    </>;
};
export default AffirmationsScreen;