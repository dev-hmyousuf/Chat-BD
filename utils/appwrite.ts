import { Client, Databases } from "react-native-appwrite";

if (!process.env.EXPO_PUBLIC_APPWRITE_APP_ID) {
  throw new Error("EXPO_PUBLIC_APPWRITE_APP_ID is not set");
}

/**
 * Create a db in appwrite and add your collections
 */
const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_APP_ID,
  platform: "com.hmyousuf.chatbd",
  db: "67f132640035fb2f1fe3",
  col: {
    chatRooms: "67f132b100230b8ab15c",
    message: "67f13290002dadc87e2d",
  //  user: "67d59bd40026f76926fd",
  },
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const database = new Databases(client);
export { database, appwriteConfig, client };
