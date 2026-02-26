import React, { useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";

type FadeInViewProps = {
  children: React.ReactNode;
  duration?: number;
  style?: ViewStyle | ViewStyle[];
  visible?: boolean;
};

const FadeInView = ({
  children,
  duration = 1000,
  style,
  visible = true,
}: FadeInViewProps) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, opacity, duration]);

  return <Animated.View style={[{ opacity }, style]}>{children}</Animated.View>;
};

export default FadeInView;
