import { FlatList, View } from "react-native";
import { Text } from "@/components/Text";
import { Link, useRouter } from "expo-router";
import { chatRooms } from "@/utils/test-data";
import { IconSymbol } from "@/components/IconSymbol";

export default function Index() {
  const router = useRouter();

  return (
    <FlatList
      data={chatRooms}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <Link
            href={{
              pathname: "/[chat]",
              params: { chat: item.id },
            }}
          >
            <View
              style={{
                gap: 6,
                padding: 16,
                width: "100%",
                borderRadius: 16,
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: "#262626",
                justifyContent: "space-between",
              }}
            >
              <ItemTitleAndDescription
                title={item.title}
                description={item.description}
                isPrivate={item.isPrivate}
              />
              <IconSymbol name="chevron.right" size={20} color="#666666" />
            </View>
          </Link>
        );
      }}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        padding: 16,
        gap: 16,
      }}
    />
  );
}

function ItemTitle({
  title,
  isPrivate,
}: {
  title: string;
  isPrivate: boolean;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      <Text style={{ fontSize: 17 }}>{title}</Text>
      {isPrivate && <IconSymbol name="lock.fill" size={20} color="#666666" />}
    </View>
  );
}

function ItemTitleAndDescription({
  title,
  description,
  isPrivate,
}: {
  title: string;
  description: string;
  isPrivate: boolean;
}) {
  return (
    <View style={{ gap: 4 }}>
      <ItemTitle title={title} isPrivate={isPrivate} />
      <Text style={{ fontSize: 13, color: "#666666" }}>{description}</Text>
    </View>
  );
}
