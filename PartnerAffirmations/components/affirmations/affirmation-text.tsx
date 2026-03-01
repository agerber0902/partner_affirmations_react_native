import { Text } from "react-native";
import FadeInView from "../shared/fade-in-animated-view";
import { affirmationTextStyles } from "@/constants/stylesheets/components/affimations/affirmation-text";
import { useAppSelector } from "@/state/hooks";

const AffirmationText = () => {
  const style = affirmationTextStyles;

  const { todaysAffirmation } = useAppSelector((state) => state.affirmation.value);
  const message = todaysAffirmation?.affirmation?.message ?? 'You are the designer of your best life';

  return (
    <>
      <FadeInView style={style.textContainer}>
        <Text numberOfLines={3} ellipsizeMode="tail" style={style.textContent}>{message}</Text>
      </FadeInView>
    </>
  );
};
export default AffirmationText;
