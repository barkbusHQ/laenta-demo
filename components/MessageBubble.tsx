"use client";

import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  content: string;
  sender: string;
  senderType: "patient" | "staff" | "ai";
  timestamp: string;
}

// AI indicator with gradient
function AIAvatar() {
  return (
    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B9D] via-[#C44FE2] via-[#6B8EFF] to-[#44D5E8] shadow-sm border-2 border-white" />
  );
}

export default function MessageBubble({
  content,
  sender,
  senderType,
  timestamp,
}: MessageBubbleProps) {
  const isOutgoing = senderType === "staff" || senderType === "ai";

  return (
    <div
      className={cn(
        "flex gap-3",
        isOutgoing ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-1 max-w-[85%]",
          isOutgoing ? "items-end" : "items-start"
        )}
      >
        <div className="relative">
          {senderType === "ai" && <AIAvatar />}
          <div
            className={cn(
              "rounded-2xl px-4 py-3 shadow-sm",
              senderType === "staff"
                ? "bg-[#2C6AEC] text-white rounded-br-sm"
                : senderType === "ai"
                ? "bg-[#2C6AEC] text-white rounded-br-sm"
                : "bg-[#F9FAFB] text-[#030000] rounded-bl-sm"
            )}
          >
            <p className="text-sm leading-relaxed">{content}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-1">
          <span className="text-xs text-gray-400">
            {sender} • {timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}
