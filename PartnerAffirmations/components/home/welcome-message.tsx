import { useAuth } from "@/providers/auth-provider";
import { Text } from "react-native";

const WelcomeMessage = () => {
    const { displayName } = useAuth();
    return (<><Text>Hello, World! {displayName}</Text></>);
};
export default WelcomeMessage;