

# Modern Chat App

A real-time multi-user chat application built with React Native and Expo, featuring seamless authentication, modern UI, and real-time updates. Built with Clerk for Passkeys & Google Sign-In and Appwrite for the backend.



## 🚀 Video, Demo & Links

  

- 📱 [GitHub Repository](https://github.com/dev-hmyousuf/chat-BD)

## ⚡ Tech Stack

- [Expo](https://expo.dev/) - React Native framework
- [Clerk](https://clerk.dev/) - Authentication & user management
- [Appwrite](https://appwrite.io/) - Backend & real-time database
- [@legendapp/list](https://www.npmjs.com/package/@legendapp/list) - High-performance list components

## 🛠️ Setup & Installation

### Prerequisites

- [Clerk Account](https://clerk.com)
- [Appwrite Account](https://appwrite.io/)
- Apple Team ID (for passkeys on iOS)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/betomoedano/modern-chat-app.git
   cd modern-chat-app
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Configure environment variables:

   Create a `.env.local` file in the root directory with:

   ```bash
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your-key-here
   EXPO_PUBLIC_APPWRITE_APP_ID=your-app-write-app-id
   ```

4. Update the `app.json` with your cleerk front end api

5. Start the development server:

   ```bash
   npx expo start
   ```

## 📱 Features

- 🔐 Secure authentication with Clerk (Passkeys & Google Sign-In)
- 💬 Real-time chat functionality
- 🎨 Modern UI
- 📱 Cross-platform compatibility
- 🎯 TypeScript for type safety



## 📄 License

This project is open source and available under the MIT License.
