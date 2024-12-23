import React from 'react';
import { formatDate } from '@/utils/formatting';
import type { Message } from '@/types/message';

interface MessageListProps {
  messages: Message[];
  currentUserId: string;
}

export function MessageList({ messages, currentUserId }: MessageListProps) {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender_id === currentUserId ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`rounded-lg px-4 py-2 max-w-sm ${
              message.sender_id === currentUserId
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <span className="text-xs opacity-75">
              {formatDate(message.created_at)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}