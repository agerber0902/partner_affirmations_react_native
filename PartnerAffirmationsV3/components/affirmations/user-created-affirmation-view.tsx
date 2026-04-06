import { ScrollView, Text } from "react-native";
import DisplayCard from "../shared/display-card";
import { _currentUser, affirmations } from "@/data/mock";
import { userCreatedAffirmationsCardStyle } from "@/style/stylesheets/affirmations/user-created-affirmations-card-style";
import ListedAffirmationView from "./listed-affirmation-view";

const UserCreatedAffirmationView = () => {
  const userCreatedAffirmations = affirmations.filter(
    (a) => a.creatorId === _currentUser.id,
  );

  const hasAffirmations = userCreatedAffirmations.length > 0;

  return (
    <>
      <DisplayCard>
        <>
          {/* User Created Affirmations */}
          <ScrollView
            style={userCreatedAffirmationsCardStyle.scrollView}
            scrollEnabled={true}
          >
            {!hasAffirmations && (
              <Text numberOfLines={1} ellipsizeMode="tail">
                You do not have any affirmations yet, create as many as you
                like.
              </Text>
            )}
            {hasAffirmations &&
              userCreatedAffirmations.map((affirmation) => (
                <>
                  <ListedAffirmationView affirmation={affirmation}/>
                </>
              ))}
          </ScrollView>

          {/* Add Button */}
        </>
      </DisplayCard>
    </>
  );
};
export default UserCreatedAffirmationView;
