import FadeInView from "../shared/fade-in-animated-view";
import { affirmationTextStyles } from "@/constants/stylesheets/components/affimations/affirmation-text";
import { useAppSelector } from "@/state/hooks";
import SharedText from "../shared/shared-text";

const AffirmationText = () => {
  const style = affirmationTextStyles;

  const { todaysAffirmation } = useAppSelector((state) => state.affirmation.value);
  const message = todaysAffirmation?.affirmation?.message ?? 'You are the designer of your best life';

  return (
    <>
      <FadeInView style={style.textContainer}>
        <SharedText numberOfLines={3} style={style.textContent} text={message} />
      </FadeInView>
    </>
  );
};
export default AffirmationText;
