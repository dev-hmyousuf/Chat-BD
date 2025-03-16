import * as React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TextInput,
  View,
} from "react-native";
import { Text } from "@/components/Text";
import { Message, ChatRoom } from "@/utils/types";
import { database, appwriteConfig, client } from "@/utils/appwrite";
import { ID, Query } from "react-native-appwrite";
import { LegendList } from "@legendapp/list";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { IconSymbol } from "@/components/IconSymbol";
import { useUser } from "@clerk/clerk-expo";

export default function ChatRoomScreen() {
  const { chat: chatRoomId } = useLocalSearchParams();
  const { user } = useUser();

  if (!chatRoomId) {
    return <Text>We couldn't find this chat room 🥲</Text>;
  }

  const [messageContent, setMessageContent] = React.useState("");
  const [chatRoom, setChatRoom] = React.useState<ChatRoom | null>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const headerHeight = Platform.OS === "ios" ? useHeaderHeight() : 0;

  React.useEffect(() => {
    getChatRoom();
    getMessages();
  }, []);

  // Subscribe to messages
  React.useEffect(() => {
    // Subscribe to updates for documents in the messages collection for this chat room
    const channel = `databases.${appwriteConfig.db}.collections.${appwriteConfig.col.message}.documents`;

    const unsubscribe = client.subscribe(channel, (response) => {
      // Check if the message belongs to the current chat room
      if (response.payload && response.payload.chatRoomId === chatRoomId) {
        // console.log("New message received:", response);
        // Refresh messages when a new one is created
        getMessages();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [chatRoomId]);

  // get chat room info by chat id
  async function getChatRoom() {
    const document = await database.getDocument(
      appwriteConfig.db,
      appwriteConfig.col.chatRooms,
      chatRoomId as string
    );

    /**
     * First, we need to cast the document to unknown to avoid type errors
     * Then, we need to cast the document to ChatRoom to get the correct type 🤷‍♂️
     */
    setChatRoom(document as unknown as ChatRoom);
  }

  // get messages associated with chat id
  async function getMessages() {
    const { documents, total } = await database.listDocuments(
      appwriteConfig.db,
      appwriteConfig.col.message,
      [Query.equal("chatRoomId", chatRoomId)]
    );

    const messages = documents.map((doc) => ({
      id: doc.$id,
      content: doc.content,
      senderId: doc.senderId,
      senderName: doc.senderName,
      senderPhoto: doc.senderPhoto,
      chatRoomId: doc.chatRoomId,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    }));

    setMessages(messages);
  }

  async function handleSendMessage() {
    if (messageContent.trim() === "") return;

    const message = {
      content: messageContent,
      senderId: user?.id!,
      senderName: user?.fullName ?? "Anonymous",
      senderPhoto: user?.imageUrl ?? "",
      chatRoomId: chatRoomId as string,
    };

    try {
      await database.createDocument(
        appwriteConfig.db,
        appwriteConfig.col.message,
        ID.unique(),
        message
      );

      setMessageContent("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: chatRoom?.title,
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <KeyboardAvoidingView
          style={{ flex: 1, padding: 10 }}
          behavior={"padding"}
          keyboardVerticalOffset={headerHeight}
        >
          <LegendList
            data={messages}
            renderItem={({ item }) => <Text>{item.content}</Text>}
            keyExtractor={(item) => item.id}
            alignItemsAtEnd
            estimatedItemSize={100}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 20,
              marginBottom: 6,
            }}
          >
            <TextInput
              placeholder="Type a message"
              style={{
                minHeight: 40,
                color: "white",
                flexShrink: 1, // prevent pushing the send button out of the screen
                flexGrow: 1, // allow the text input to grow keeping the send button to the right
                padding: 10,
              }}
              placeholderTextColor={"gray"}
              multiline
              value={messageContent}
              onChangeText={setMessageContent}
            />
            <Pressable
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={handleSendMessage}
            >
              <IconSymbol name="paperplane" size={24} color="white" />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
