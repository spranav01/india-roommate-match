
import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  sender: string;
  timestamp: string;
  isCurrentUser: boolean;
  avatar: string;
}

const ChatMessage = ({ 
  message, 
  sender, 
  timestamp, 
  isCurrentUser,
  avatar 
}: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex items-start mb-4",
      isCurrentUser ? "flex-row-reverse" : ""
    )}>
      <img 
        src={avatar} 
        alt={sender} 
        className="w-10 h-10 rounded-full object-cover"
      />
      
      <div className={cn(
        "max-w-[75%] mx-3",
        isCurrentUser ? "text-right" : "text-left"
      )}>
        <div className={cn(
          "inline-block rounded-lg py-2 px-4",
          isCurrentUser 
            ? "bg-staymate-primary text-white" 
            : "bg-gray-100 text-gray-800"
        )}>
          <p className="mb-1">{message}</p>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {!isCurrentUser && <span className="font-medium mr-1">{sender}</span>}
          <span>{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
