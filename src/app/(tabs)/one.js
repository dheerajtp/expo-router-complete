import { Link } from "expo-router";
import { Text, View } from "react-native";

const One = () => {
  return (
    <View>
      <Text>One</Text>
      <Link href="/">
        <Text>Logout</Text>
      </Link>
    </View>
  );
};

export default One;
