import { affirmationDisplayStyles } from "@/constants/stylesheets/components/affimations/affirmation-display-styles";
import { getUser } from "@/helpers/user-helper";
import { useAppSelector } from "@/state/hooks";
import { useEffect, useState } from "react";
import { Animated, Text } from "react-native";

const AffirmationDisplay = () => {
  const style = affirmationDisplayStyles();

  const { todaysAffirmation } = useAppSelector(
    (state) => state.affirmation.value,
  );
  const [creatorMessage, setCreatorMessage] = useState<string>("");

  useEffect(() => {
    const creatorMessage = async () => {
      // Get the creator id
      const creator = await getUser(
        todaysAffirmation?.affirmation?.creatorId ?? "",
      );
      setCreatorMessage(`${creator?.displayNameForPartner} want you to know,`);
    };

    creatorMessage();
  }, [todaysAffirmation]);

  return (
    <>
      {todaysAffirmation?.affirmation && (
        <Animated.View style={style.container}>
          <Text style={style.message}>{creatorMessage}</Text>
          <Text style={style.message}>
            {todaysAffirmation?.affirmation?.message}
          </Text>
        </Animated.View>
      )}
    </>
  );
};
export default AffirmationDisplay;
