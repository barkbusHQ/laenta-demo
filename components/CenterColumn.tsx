"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MessageBubble from "./MessageBubble";
import { Patient } from "@/lib/data";
import { Switch } from "@/components/ui/switch";

interface CenterColumnProps {
  patient: Patient;
}

export default function CenterColumn({ patient }: CenterColumnProps) {
  // Track AI mode per patient conversation
  const [aiModeByPatient, setAiModeByPatient] = useState<Record<number, boolean>>({});
  const aiMode = aiModeByPatient[patient.id] ?? false;

  const setAiMode = (value: boolean) => {
    setAiModeByPatient(prev => ({ ...prev, [patient.id]: value }));
  };

  return (
    <div className="w-[600px] border-r border-[#E5E6EA] flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="p-6 border-b border-[#E5E6EA]">
        <AnimatePresence mode="wait">
          <motion.div
            key={patient.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          >
            <h2 className="text-xl font-semibold text-[#030000] mb-1">{patient.name}</h2>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>{patient.age} years old</span>
              <span>•</span>
              <span>{patient.gender}</span>
              <span>•</span>
              <span>Last visit: {patient.lastVisit}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Message Thread */}
      <AnimatePresence mode="wait">
        <motion.div
          key={patient.id}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 overflow-y-auto p-6 space-y-4"
        >
          {patient.messages.map((message) => (
            <MessageBubble
              key={message.id}
              content={message.content}
              sender={message.sender}
              senderType={message.senderType}
              timestamp={message.timestamp}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Message Composer */}
      <div className="p-6 border-t border-[#E5E6EA]">
        <div className="flex items-center gap-3">
          {/* AI Toggle */}
          <div className="flex items-center gap-2">
            <Switch
              checked={aiMode}
              onCheckedChange={setAiMode}
              aria-label="Toggle AI mode"
            />
            <span className="text-xs text-gray-500 font-medium">AI</span>
          </div>

          {/* Input with AI gradient border when active */}
          <div
            className={`flex-1 relative rounded-xl p-[2px] ${
              aiMode ? "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" : "bg-transparent"
            }`}
          >
            <input
              type="text"
              placeholder={aiMode ? "🤖 AI is composing a response..." : "Type a message..."}
              disabled={aiMode}
              className={`w-full px-4 py-3 border rounded-[10px] text-sm text-[#030000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2C6AEC] focus:border-transparent ${
                aiMode
                  ? "bg-gray-50 border-transparent cursor-not-allowed placeholder:text-gray-500"
                  : "bg-[#F9FAFB] border-[#E5E6EA]"
              }`}
            />
          </div>

          <button
            disabled={aiMode}
            className={`p-3 rounded-xl transition-colors ${
              aiMode
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#2C6AEC] text-white hover:bg-[#1E56CC]"
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
