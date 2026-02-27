import { AuthProvider } from "@/providers/auth-provider";
import StoreProvder from "@/state/StateProvider";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Lora_400Regular, Lora_500Medium } from "@expo-google-fonts/lora";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_500Medium,
    Inter_400Regular,
    Inter_500Medium,
  });

  if(!fontsLoaded){
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
