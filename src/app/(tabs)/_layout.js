import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="one"
        options={{
          title: "First Tab",
          tabBarLabel: "Home",
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Second Tab",
          tabBarLabel: "Profile",
          tabBarIcon: () => {
            return <AntDesign name="profile" size={24} color="black" />;
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
