import { View, Button } from "react-native";
import { Text } from "@/components/Text";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function Profile() {
  const { signOut } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/(auth)");
  };
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
      <Button
        title="Create Passkey"
        onPress={async () => {
          try {
            await user?.createPasskey();
            console.log("Passkey created");
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </View>
  );
}
