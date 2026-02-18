import { AuthProvider } from "@/providers/auth-provider";
import StoreProvder from "@/state/StateProvider";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StoreProvder>
        <Stack screenOptions={{ headerShown: false }} />
      </StoreProvder>
    </AuthProvider>
  );
}
