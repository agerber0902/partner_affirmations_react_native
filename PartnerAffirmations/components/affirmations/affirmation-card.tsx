import { useAuth } from "@/providers/auth-provider";
import FadeInView from "../shared/fade-in-animated-view";
import { View } from "react-native";
import AffirmationText from "./affirmation-text";
import Button from "../shared/button";
import { affirmationCardStyles } from "@/constants/stylesheets/components/affimations/affirmation-card-styles";
import { baseAnimationDelayDuration, baseAnimationDuration } from "@/constants/theme";

const AffirmationCard = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <FadeInView
        duration={baseAnimationDuration}
        delay={baseAnimationDelayDuration * 3}
        visible={isAuthenticated}
        style={affirmationCardStyles.cardContainer}
      >
        <View style={affirmationCardStyles.cardContent}>
          <View style={affirmationCardStyles.cardTitle}>
            <AffirmationText />
          </View>

          <View style={affirmationCardStyles.cardButton}>
            <Button onPress={() => {}} title={"Next Affirmation"} />
          </View>
        </View>
      </FadeInView>
    </>
  );
};
export default AffirmationCard;
