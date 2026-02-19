import WelcomeMessage from "@/components/home/welcome-message";
import { homeStyles } from "@/constants/stylesheets/home-styles";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

type HomeProps = {
  isVisible: boolean;
};
const Home = ({ isVisible }: HomeProps) => {
  const style = homeStyles();

  // Animation
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (isVisible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, opacity]);

  return (
    <Animated.View style={[style.homeContainer, { opacity }]}>
        <WelcomeMessage/>
    </Animated.View>
  );
};
export default Home;
