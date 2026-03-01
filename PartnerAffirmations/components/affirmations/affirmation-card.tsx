import { useAuth } from "@/providers/auth-provider";
import FadeInView from "../shared/fade-in-animated-view";
import { Text, View } from "react-native";
import AffirmationText from "./affirmation-text";
import Button from "../shared/button";
import { affirmationCardStyles } from "@/constants/stylesheets/components/affimations/affirmation-card-styles";

const AffirmationCard = () => {
  const { isAuthenticated } = useAuth();
  const style = affirmationCardStyles;
  return (
    <>
      <FadeInView
        duration={2000}
        visible={isAuthenticated}
        style={style.cardContainer}
      >
        <View style={style.cardContent}>
          <View style={style.cardTitle}>
            <AffirmationText />
          </View>

          <View style={style.cardButton}>
            <Button onPress={() => {}} title={"Next Affirmation"} />
          </View>
        </View>
      </FadeInView>
    </>
  );
};
export default AffirmationCard;
