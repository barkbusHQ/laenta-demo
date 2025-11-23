"use client";

import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  content: string;
  sender: string;
  senderType: "patient" | "staff";
  timestamp: string;
  avatar: string;
}

export default function MessageBubble({
  content,
  sender,
  senderType,
  timestamp,
  avatar,
}: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "flex gap-3",
        senderType === "staff" ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-1 max-w-[85%]",
          senderType === "staff" ? "items-end" : "items-start"
        )}
      >
        <div
          className={cn(
            "rounded-2xl px-4 py-3 shadow-sm",
            senderType === "staff"
              ? "bg-[#5538DE] text-white rounded-br-sm"
              : "bg-[#F9FAFB] text-[#030000] rounded-bl-sm"
          )}
        >
          <p className="text-sm leading-relaxed">{content}</p>
        </div>
        <div className="flex items-center gap-2 px-1">
          {senderType === "staff" && (
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-medium bg-[#5538DE] text-white">
              {avatar}
            </div>
          )}
          <span className="text-xs text-gray-400">
            {sender} • {timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}
