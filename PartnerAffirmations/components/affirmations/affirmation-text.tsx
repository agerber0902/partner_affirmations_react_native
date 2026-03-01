import { Text } from "react-native";
import FadeInView from "../shared/fade-in-animated-view";
import { affirmationTextStyles } from "@/constants/stylesheets/components/affimations/affirmation-text";

const AffirmationText = () => {
  const style = affirmationTextStyles;

  return (
    <>
      <FadeInView style={style.textContainer}>
        <Text numberOfLines={3} ellipsizeMode="tail" style={style.textContent}>You are the designer of your best life</Text>
      </FadeInView>
    </>
  );
};
export default AffirmationText;
