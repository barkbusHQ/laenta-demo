"use client";

import { Send } from "lucide-react";
import MessageBubble from "./MessageBubble";

interface Message {
  id: number;
  content: string;
  sender: string;
  senderType: "patient" | "staff";
  timestamp: string;
  avatar: string;
}

const messages: Message[] = [
  {
    id: 1,
    content: "Hi, I wanted to follow up on my hearing test results from last week.",
    sender: "Marcus Chen",
    senderType: "patient",
    timestamp: "10:23 AM",
    avatar: "MC",
  },
  {
    id: 2,
    content: "Good morning Marcus! Dr. Martinez reviewed your results. You have mild high-frequency hearing loss, which is common and treatable.",
    sender: "Sarah (Receptionist)",
    senderType: "staff",
    timestamp: "10:25 AM",
    avatar: "SR",
  },
  {
    id: 3,
    content: "What are my treatment options?",
    sender: "Marcus Chen",
    senderType: "patient",
    timestamp: "10:26 AM",
    avatar: "MC",
  },
  {
    id: 4,
    content: "Dr. Martinez recommends starting with hearing aids. We have several options that would work well for your lifestyle. Would you like to schedule a fitting appointment?",
    sender: "Sarah (Receptionist)",
    senderType: "staff",
    timestamp: "10:28 AM",
    avatar: "SR",
  },
  {
    id: 5,
    content: "Yes, that would be great. What days do you have available next week?",
    sender: "Marcus Chen",
    senderType: "patient",
    timestamp: "10:30 AM",
    avatar: "MC",
  },
  {
    id: 6,
    content: "We have openings Tuesday at 2pm or Thursday at 11am. Which works better for you?",
    sender: "Sarah (Receptionist)",
    senderType: "staff",
    timestamp: "10:31 AM",
    avatar: "SR",
  },
  {
    id: 7,
    content: "Thursday at 11am works perfectly!",
    sender: "Marcus Chen",
    senderType: "patient",
    timestamp: "10:32 AM",
    avatar: "MC",
  },
  {
    id: 8,
    content: "Perfect! I've scheduled your hearing aid fitting for Thursday, November 23rd at 11:00 AM with Dr. Martinez. You'll receive a confirmation email shortly.",
    sender: "Sarah (Receptionist)",
    senderType: "staff",
    timestamp: "10:33 AM",
    avatar: "SR",
  },
  {
    id: 9,
    content: "Will my insurance cover the hearing aids?",
    sender: "Marcus Chen",
    senderType: "patient",
    timestamp: "10:35 AM",
    avatar: "MC",
  },
  {
    id: 10,
    content: "Great question! Mike from our billing team will call you this afternoon to verify your coverage and explain your options.",
    sender: "Sarah (Receptionist)",
    senderType: "staff",
    timestamp: "10:37 AM",
    avatar: "SR",
  },
  {
    id: 11,
    content: "That's very helpful, thank you!",
    sender: "Marcus Chen",
    senderType: "patient",
    timestamp: "10:38 AM",
    avatar: "MC",
  },
  {
    id: 12,
    content: "You're welcome! Is there anything else I can help you with today?",
    sender: "Sarah (Receptionist)",
    senderType: "staff",
    timestamp: "10:39 AM",
    avatar: "SR",
  },
  {
    id: 13,
    content: "No, that's everything. I appreciate your help!",
    sender: "Marcus Chen",
    senderType: "patient",
    timestamp: "10:40 AM",
    avatar: "MC",
  },
  {
    id: 14,
    content: "Wonderful! We'll see you Thursday. Have a great day!",
    sender: "Sarah (Receptionist)",
    senderType: "staff",
    timestamp: "10:41 AM",
    avatar: "SR",
  },
];

export default function CenterColumn() {
  return (
    <div className="w-[600px] border-r border-[#E5E6EA] flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="p-6 border-b border-[#E5E6EA]">
        <h2 className="text-xl font-semibold text-[#030000] mb-1">Marcus Chen</h2>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>42 years old</span>
          <span>•</span>
          <span>Male</span>
          <span>•</span>
          <span>Last visit: Nov 12, 2024</span>
        </div>
      </div>

      {/* Message Thread */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            content={message.content}
            sender={message.sender}
            senderType={message.senderType}
            timestamp={message.timestamp}
            avatar={message.avatar}
          />
        ))}
      </div>

      {/* Message Composer */}
      <div className="p-6 border-t border-[#E5E6EA]">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 bg-[#F9FAFB] border border-[#E5E6EA] rounded-xl text-sm text-[#030000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5538DE] focus:border-transparent"
          />
          <button className="p-3 bg-[#5538DE] text-white rounded-xl hover:bg-[#4527CC] transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
