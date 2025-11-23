"use client";

import { useState } from "react";
import { Search, MessageSquarePlus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SearchModal from "./SearchModal";

interface Patient {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  urgent: boolean;
  vip: boolean;
  isActive: boolean;
}

const patients: Patient[] = [
  {
    id: 1,
    name: "Marcus Chen",
    lastMessage: "Thanks Dr. Martinez! The hearing aids are working great.",
    timestamp: "3m ago",
    unread: true,
    urgent: false,
    vip: true,
    isActive: true,
  },
  {
    id: 2,
    name: "Sarah Williams",
    lastMessage: "Can we reschedule my allergy test for next week?",
    timestamp: "12m ago",
    unread: true,
    urgent: true,
    vip: false,
    isActive: false,
  },
  {
    id: 3,
    name: "James Rodriguez",
    lastMessage: "The sinus rinse has been helping a lot, thank you!",
    timestamp: "45m ago",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 4,
    name: "Emily Thompson",
    lastMessage: "I'm still experiencing some dizziness after the procedure",
    timestamp: "1h ago",
    unread: true,
    urgent: true,
    vip: false,
    isActive: false,
  },
  {
    id: 5,
    name: "David Park",
    lastMessage: "Confirming my 2pm appointment tomorrow",
    timestamp: "2h ago",
    unread: false,
    urgent: false,
    vip: true,
    isActive: false,
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    lastMessage: "Question about the post-op care instructions",
    timestamp: "3h ago",
    unread: true,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 7,
    name: "Michael Brown",
    lastMessage: "The tinnitus has improved since starting treatment",
    timestamp: "5h ago",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 8,
    name: "Lisa Anderson",
    lastMessage: "Need to cancel Friday's appointment - will reschedule",
    timestamp: "Yesterday",
    unread: false,
    urgent: false,
    vip: true,
    isActive: false,
  },
  {
    id: 9,
    name: "Robert Taylor",
    lastMessage: "The balance therapy exercises are helping!",
    timestamp: "Yesterday",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 10,
    name: "Amanda Garcia",
    lastMessage: "When should I schedule my follow-up hearing test?",
    timestamp: "Yesterday",
    unread: true,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 11,
    name: "Christopher Lee",
    lastMessage: "The ear drops are helping with the infection",
    timestamp: "Nov 17",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 12,
    name: "Patricia Johnson",
    lastMessage: "Still having trouble with seasonal allergies",
    timestamp: "Nov 17",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 13,
    name: "Daniel Kim",
    lastMessage: "Thanks for seeing me on short notice!",
    timestamp: "Nov 16",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 14,
    name: "Maria Gonzalez",
    lastMessage: "The throat pain is much better now",
    timestamp: "Nov 16",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 15,
    name: "Kevin Wright",
    lastMessage: "Ready for the septoplasty procedure next week",
    timestamp: "Nov 15",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 16,
    name: "Rachel Mitchell",
    lastMessage: "The vertigo symptoms have decreased significantly",
    timestamp: "Nov 15",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 17,
    name: "Thomas Harris",
    lastMessage: "Insurance question about the hearing aids",
    timestamp: "Nov 14",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
  {
    id: 18,
    name: "Nicole Davis",
    lastMessage: "My daughter's ear tubes are working perfectly",
    timestamp: "Nov 13",
    unread: false,
    urgent: false,
    vip: false,
    isActive: false,
  },
];

export default function LeftSidebar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
      <div className="w-[280px] bg-[#F9FAFB] border-r border-[#E5E6EA] flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 border-b border-[#E5E6EA]">
        <div className="flex items-center justify-between mb-4">
          {/* Hudson Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 4L24 22H4L14 4Z"
                fill="#5538DE"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-lg font-semibold text-[#030000]">Hudson</span>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 text-[#030000]" />
            </button>
            <button className="p-2 hover:bg-white rounded-lg transition-colors">
              <MessageSquarePlus className="w-5 h-5 text-[#5538DE]" />
            </button>
          </div>
        </div>
      </div>

      {/* Patient List */}
      <div className="flex-1 overflow-y-auto">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={cn(
              "pl-3 pr-4 py-4 border-b border-[#E5E6EA] cursor-pointer transition-colors hover:bg-white relative",
              patient.isActive && "bg-white"
            )}
          >
            <div className="flex items-start gap-2">
              {/* Status Indicator - Fixed width container on left */}
              <div className="w-3 flex items-center justify-center flex-shrink-0 h-5">
                {patient.unread && !patient.urgent && (
                  <div className="w-2 h-2 rounded-full bg-[#5538DE]" />
                )}
                {patient.urgent && (
                  <motion.div
                    className="w-2 h-2 rounded-full bg-red-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Patient Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-[#030000] text-sm truncate">
                    {patient.name}
                  </h3>
                  {patient.vip && (
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-gray-500 truncate mb-1">
                  {patient.lastMessage}
                </p>
                <span className="text-xs text-gray-400">{patient.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
