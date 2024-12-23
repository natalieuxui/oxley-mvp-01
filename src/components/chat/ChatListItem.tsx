import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Chat } from "../../types/Chat";

interface ChatListItemProps {
  chat: Chat;
  onPress: (chatId: string) => void;
}

export function ChatListItem({ chat, onPress }: ChatListItemProps) {
  return (
    <gridLayout 
      columns="*, auto" 
      rows="auto, auto"
      className="p-4 border-b border-gray-200"
      onTap={() => onPress(chat.id)}
    >
      <label row={0} col={0} className="font-bold text-lg" text={chat.name} />
      <label row={0} col={1} className="text-sm text-gray-500" text={chat.timestamp.toLocaleTimeString()} />
      <label row={1} col={0} className="text-gray-600 text-sm" text={chat.lastMessage} />
      {chat.unreadCount > 0 && (
        <label 
          row={1} 
          col={1} 
          className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 text-center" 
          text={chat.unreadCount.toString()} 
        />
      )}
    </gridLayout>
  );
}