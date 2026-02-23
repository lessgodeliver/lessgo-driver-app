import { View, Button } from "react-native";
import { useAuth } from "@/features/auth/context/AuthContext";
import { useGoogleSignIn } from "@/features/auth/services/googleAuth.service";
import { firebaseGoogleSignIn } from "@/features/auth/services/firebaseAuth.service";

export default function Login() {
  const { setUser } = useAuth();
  const { request, promptAsync } = useGoogleSignIn();

  const handleLogin = async () => {
    const result = await promptAsync();

    if (result?.type === "success") {
      const idToken = result.authentication?.idToken;

      if (!idToken) return;

      const user = await firebaseGoogleSignIn(idToken);
      setUser(user);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={handleLogin}
      />
    </View>
  );
}