import { View, Text } from "react-native";
import { useAuth } from "@/features/auth/context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile page</Text>
      <Text>Name: {user?.displayName}</Text>
      <Text>Email: {user?.email}</Text>
    </View>
  );
}