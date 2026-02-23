import { View, Text, Button } from "react-native";
import { useAuth } from "@/features/auth/context/AuthContext";
import { logout } from "@/features/auth/services/firebaseAuth.service";

export default function Home() {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, {user?.displayName}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}