import { Link, Stack, router } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { TouchableOpacity } from "react-native";

export default function RootChatLayout() {
  const { user } = useUser();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          title: " Chat Rooms", // left space for android
          headerLeft: () => (
            <Link href="/profile">
              <Image
                source={{ uri: user?.imageUrl }}
                style={{ width: 32, height: 32, borderRadius: 16 }}
              />
            </Link>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push("/new-room")} >
              <IconSymbol name="plus" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="new-room"
        options={{
          presentation: "modal",
          headerTitle: "New Chat Room",
          headerLeft: () => (
            <Link href="/" dismissTo>
              <IconSymbol name="chevron.left" />
            </Link>
          ),
        }}
      />
      <Stack.Screen name="profile" options={{ presentation: "modal" }} />

      {/* Set title to empty string to prevent showing [chat] in the header while chat room title is being fetched */}
      <Stack.Screen name="[chat]" options={{ headerTitle: "" }} />
      <Stack.Screen
        name="settings/[chat]"
        options={{ presentation: "modal", headerTitle: "Room Settings" }}
      />
    </Stack>
  );
}
