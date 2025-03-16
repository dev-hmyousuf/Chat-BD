interface ChatRoom {
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
  chatRoomId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  imageUrl: string;
}

export type { ChatRoom, Message, User };
