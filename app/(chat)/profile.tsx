import { View, Button } from "react-native";
import { Text } from "@/components/Text";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/(auth)");
  };
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}
