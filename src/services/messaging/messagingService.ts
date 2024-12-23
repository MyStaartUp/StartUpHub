import { supabase } from '../supabase/client';
import type { Message } from '@/types/message';

export const messagingService = {
  async getConversation(conversationId: string) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data;
  },

  async sendMessage(message: Omit<Message, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('messages')
      .insert(message)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  subscribeToMessages(conversationId: string, callback: (message: Message) => void) {
    return supabase
      .channel(`messages:${conversationId}`)
      .on('INSERT', payload => {
        callback(payload.new as Message);
      })
      .subscribe();
  }
};