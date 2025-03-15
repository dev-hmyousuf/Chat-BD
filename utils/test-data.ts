interface ChatRoom {
  id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  members: string[]; // user ids
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

interface Message {
  id: string;
  content: string;
  senderId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const chatRooms: ChatRoom[] = [
  {
    id: "1",
    title: "Chat Room 1",
    description: "Chat Room 1 Description",
    isPrivate: false,
    members: ["1", "2"],
    messages: [
      {
        id: "1",
        content: "Hello, how are you?",
        senderId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        content: "I'm fine, thank you!",
        senderId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        content: "What's up?",
        senderId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Chat Room 2",
    description: "Chat Room 2 Description",
    isPrivate: true,
    members: ["1", "3"],
    messages: [
      {
        id: "1",
        content: "Hello, how are you?",
        senderId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
