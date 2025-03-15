import { Button, ScrollView } from "react-native";
import { Text } from "@/components/Text";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Text>Chat</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </ScrollView>
  );
}
