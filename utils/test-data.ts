export interface ChatRoom {
  id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Message {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  senderPhoto: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  imageUrl: string;
}

export const chatRooms: ChatRoom[] = [
  {
    id: "1",
    title: "Chat Room 1",
    description: "Chat Room 1 Description",
    isPrivate: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Chat Room 2",
    description: "Chat Room 2 Description",
    isPrivate: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
