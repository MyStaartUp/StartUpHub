import { useState, useEffect } from 'react';
import { messagingService } from '@/services/messaging/messagingService';
import type { Message } from '@/types/message';

export function useConversation(conversationId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        const data = await messagingService.getConversation(conversationId);
        setMessages(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erreur de chargement des messages'));
      } finally {
        setLoading(false);
      }
    }

    loadMessages();

    const subscription = messagingService.subscribeToMessages(
      conversationId,
      (newMessage) => {
        setMessages(prev => [...prev, newMessage]);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [conversationId]);

  const sendMessage = async (content: string, senderId: string) => {
    try {
      const newMessage = await messagingService.sendMessage({
        conversation_id: conversationId,
        sender_id: senderId,
        content
      });
      return newMessage;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Erreur d\'envoi du message');
    }
  };

  return {
    messages,
    loading,
    error,
    sendMessage
  };
}