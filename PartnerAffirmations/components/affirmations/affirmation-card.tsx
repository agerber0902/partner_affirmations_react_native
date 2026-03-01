import { useAuth } from "@/providers/auth-provider";
import FadeInView from "../shared/fade-in-animated-view";
import { Text, View } from "react-native";
import AffirmationText from "./affirmation-text";
import { sharedCardStyles } from "@/constants/stylesheets/components/shared/shared-card-styles";

const AffirmationCard = () => {
  const { isAuthenticated } = useAuth();
  const style = sharedCardStyles;
  return (
    <>
      <FadeInView duration={2000} visible={isAuthenticated} style={style.cardContainer}>
        <View style={style.cardContent}>
            <AffirmationText/>
        </View>
      </FadeInView>
    </>
  );
};
export default AffirmationCard;
