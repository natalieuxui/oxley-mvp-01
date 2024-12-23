import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { Chat } from "../types/Chat";
import { ChatListItem } from "../components/chat/ChatListItem";

type ChatsScreenProps = {
  route: RouteProp<MainStackParamList, "Chats">;
  navigation: FrameNavigationProp<MainStackParamList, "Chats">;
};

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    timestamp: new Date(),
    unreadCount: 2
  },
  {
    id: '2',
    name: 'Jane Smith',
    lastMessage: 'See you tomorrow!',
    timestamp: new Date(),
    unreadCount: 0
  }
];

export function ChatsScreen({ navigation }: ChatsScreenProps) {
  const handleChatPress = (chatId: string) => {
    // Navigate to individual chat screen (to be implemented)
    console.log(`Chat ${chatId} pressed`);
  };

  return (
    <scrollView className="bg-white">
      {mockChats.map(chat => (
        <ChatListItem 
          key={chat.id} 
          chat={chat} 
          onPress={handleChatPress}
        />
      ))}
    </scrollView>
  );
}