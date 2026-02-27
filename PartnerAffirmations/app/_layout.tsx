import { AuthProvider } from "@/providers/auth-provider";
import StoreProvder from "@/state/StateProvider";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { useFonts, Cormorant_300Light, Cormorant_400Regular, Cormorant_500Medium } from "@expo-google-fonts/cormorant";
import { SourceSans3_400Regular, SourceSans3_500Medium } from "@expo-google-fonts/source-sans-3";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Cormorant_300Light,
    Cormorant_400Regular,
    Cormorant_500Medium,
    SourceSans3_400Regular,
    SourceSans3_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <StoreProvder>
        <Stack screenOptions={{ headerShown: false }} />
      </StoreProvder>
    </AuthProvider>
  );
}
