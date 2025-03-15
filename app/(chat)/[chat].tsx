import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/Text";

export default function ChatRoom() {
  const { chat } = useLocalSearchParams();

  return (
    <View>
      <Text>Chat Room {chat}</Text>
    </View>
  );
}
