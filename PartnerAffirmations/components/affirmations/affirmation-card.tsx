import { useAuth } from "@/providers/auth-provider";
import FadeInView from "../shared/fade-in-animated-view";
import { affirmationCardStyles } from "@/constants/stylesheets/components/affimations/affirmation-card-styles";
import { Text, View } from "react-native";
import AffirmationText from "./affirmation-text";

const AffirmationCard = () => {
  const { isAuthenticated } = useAuth();
  const style = affirmationCardStyles;
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
