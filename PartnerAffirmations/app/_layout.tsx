import StoreProvder from "@/state/StateProvider";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <StoreProvder>
      <Stack screenOptions={{ headerShown: false }} />
    </StoreProvder>
  );
}
