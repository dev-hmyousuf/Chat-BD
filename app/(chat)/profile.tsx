import { View } from "react-native";
import { Text } from "@/components/Text";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Profile() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
