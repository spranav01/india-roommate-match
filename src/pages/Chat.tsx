
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatMessage from '@/components/ChatMessage';
import { Search, Send } from 'lucide-react';

// Mock chat data - in a real app, this would come from an API
const mockChats = [
  {
    id: 1,
    name: 'Aarav Singh',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    lastMessage: 'That sounds perfect! When can we meet to see the apartment?',
    timestamp: '2:34 PM',
    unread: 2
  },
  {
    id: 2,
    name: 'Nisha Verma',
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    lastMessage: 'Hi, I liked your profile and we seem to have similar preferences.',
    timestamp: 'Yesterday',
    unread: 0
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    lastMessage: 'What area of Bangalore are you looking to live in?',
    timestamp: '2 days ago',
    unread: 0
  }
];

// Mock conversation
const mockConversation = [
  {
    id: 1,
    senderId: 1,
    message: 'Hi there! I saw your profile and noticed we have a lot of common preferences.',
    timestamp: '10:12 AM',
    sender: 'Aarav Singh',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
  },
  {
    id: 2,
    senderId: 'me',
    message: 'Hey Aarav! Thanks for reaching out. Yes, I noticed that too. Are you still looking for a roommate?',
    timestamp: '10:15 AM',
    sender: 'Me',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  {
    id: 3,
    senderId: 1,
    message: 'Yes, I am! I\'m looking for a place in Indira Nagar. What\'s your budget range?',
    timestamp: '10:18 AM',
    sender: 'Aarav Singh',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
  },
  {
    id: 4,
    senderId: 'me',
    message: 'My budget is around ₹15,000 - ₹20,000 per month. I\'m looking for a 2BHK, preferably with good amenities.',
    timestamp: '10:20 AM',
    sender: 'Me',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  {
    id: 5,
    senderId: 1,
    message: 'That sounds perfect! I found a nice 2BHK in Indira Nagar for ₹35,000 total. We could split it.',
    timestamp: '10:23 AM',
    sender: 'Aarav Singh',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
  },
  {
    id: 6,
    senderId: 1,
    message: 'It\'s close to the metro station and has a gym and pool. Would you be interested in seeing it?',
    timestamp: '10:24 AM',
    sender: 'Aarav Singh',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
  },
  {
    id: 7,
    senderId: 'me',
    message: 'That sounds perfect! When can we meet to see the apartment?',
    timestamp: '10:30 AM',
    sender: 'Me',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
  }
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [messages, setMessages] = useState(mockConversation);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSelectChat = (chat: typeof mockChats[0]) => {
    setSelectedChat(chat);
    // In a real app, this would fetch the conversation from an API
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        senderId: 'me',
        message: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: 'Me',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
      };
      
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Scroll to bottom of messages
      setTimeout(() => {
        const chatContainer = document.getElementById('chat-messages');
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto h-[calc(100vh-16rem)]">
          <div className="flex h-full bg-white shadow-md rounded-lg overflow-hidden">
            {/* Conversation List */}
            <div className="w-1/3 border-r">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Search messages" 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-73px)]">
                {mockChats.map(chat => (
                  <div 
                    key={chat.id}
                    className={`flex items-center p-4 border-b cursor-pointer hover:bg-gray-50 ${selectedChat.id === chat.id ? 'bg-staymate-light' : ''}`}
                    onClick={() => handleSelectChat(chat)}
                  >
                    <div className="relative">
                      <img 
                        src={chat.avatar} 
                        alt={chat.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {chat.unread > 0 && (
                        <span className="absolute -top-1 -right-1 bg-staymate-primary rounded-full w-5 h-5 text-xs text-white flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    
                    <div className="ml-4 flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">{chat.name}</h3>
                        <span className="text-xs text-gray-500">{chat.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b flex items-center">
                <img 
                  src={selectedChat.avatar} 
                  alt={selectedChat.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h3 className="font-medium">{selectedChat.name}</h3>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>
              </div>
              
              {/* Messages */}
              <div 
                id="chat-messages"
                className="flex-1 p-4 overflow-y-auto"
              >
                {messages.map(message => (
                  <ChatMessage 
                    key={message.id}
                    message={message.message}
                    sender={message.sender}
                    timestamp={message.timestamp}
                    isCurrentUser={message.senderId === 'me'}
                    avatar={message.avatar}
                  />
                ))}
              </div>
              
              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t flex items-center">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button 
                  type="submit"
                  className="ml-2 bg-staymate-primary hover:bg-staymate-secondary"
                >
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
