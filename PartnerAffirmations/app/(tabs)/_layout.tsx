import { radius, Theme } from "@/constants/theme";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
            borderTopLeftRadius: radius.tabs,
            borderTopRightRadius: radius.tabs,
        },
        tabBarActiveTintColor: Theme.colors.tabActive,
        tabBarInactiveTintColor: Theme.colors.tabInactive,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({focused, color, size }) => (
            <Ionicons name="home" size={size + (focused ? 3 : 0)} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="person" size={size + (focused ? 3 : 0)} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
