import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

const App = () => {
  const router = useRouter();
  return (
    <View>
      <Text onPress={() => router.push("register")}>Register User</Text>
      <Link href="register" asChild>
        <Text>Open register with Link component from expo router</Text>
      </Link>
      <Text onPress={() => router.push("(tabs)/one")}>
        Tab One for a better click
      </Text>
    </View>
  );
};

export default App;
