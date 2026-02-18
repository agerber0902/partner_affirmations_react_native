import { useAuth } from "@/providers/auth-provider";
import { Text } from "react-native";

const Home = () => {

    const { user } = useAuth();

    return (<Text>{user?.displayName}, {user?.email}</Text>);
};
export default Home;