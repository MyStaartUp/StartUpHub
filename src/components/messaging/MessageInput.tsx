import React, { useState } from 'react';
import { Button } from '@/components/common';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSend: (content: string) => Promise<void>;
  disabled?: boolean;
}

export function MessageInput({ onSend, disabled }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || disabled) return;

    try {
      await onSend(message);
      setMessage('');
    } catch (error) {
      console.error('Erreur d\'envoi:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Votre message..."
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        disabled={disabled}
      />
      <Button
        type="submit"
        disabled={!message.trim() || disabled}
        variant="primary"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}