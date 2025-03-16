import * as React from "react";
import { View, Switch, Button } from "react-native";
import Input from "@/components/Input";
import { useState } from "react";
import { Text } from "@/components/Text";
import { Stack } from "expo-router";

export default function NewRoom() {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              title="Create"
              onPress={() => {}}
              disabled={roomName.length === 0}
            />
          ),
        }}
      />
      <View style={{ padding: 16, gap: 16 }}>
        <Input
          placeholder="Room Name"
          value={roomName}
          onChangeText={setRoomName}
        />
        <Input
          placeholder="Room Description"
          value={roomDescription}
          onChangeText={setRoomDescription}
          multiline
          numberOfLines={4}
          maxLength={100}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#262626",
            paddingHorizontal: 18,
            paddingVertical: 12,
            borderRadius: 16,
          }}
        >
          <Text>Private</Text>
          <Switch value={isPrivate} onValueChange={setIsPrivate} />
        </View>
      </View>
    </>
  );
}
