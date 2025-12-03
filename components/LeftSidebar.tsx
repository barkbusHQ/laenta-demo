"use client";

import { useState } from "react";

import { Search, MessageSquarePlus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SearchModal from "./SearchModal";
import { Patient } from "@/lib/data";

interface LeftSidebarProps {
  patients: Patient[];
  selectedPatientId: number;
  onSelectPatient: (patient: Patient) => void;
}

export default function LeftSidebar({
  patients,
  selectedPatientId,
  onSelectPatient,
}: LeftSidebarProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [readPatients, setReadPatients] = useState<Set<number>>(new Set());

  // Sort patients by id so Sara (id: 1) appears first
  const sortedPatients = [...patients].sort((a, b) => a.id - b.id);

  const handleSelectPatient = (patient: Patient) => {
    setReadPatients(prev => new Set(prev).add(patient.id));
    onSelectPatient(patient);
  };

  return (
    <>
      <SearchModal
        open={searchOpen}
        onOpenChange={setSearchOpen}
        patients={patients}
        onSelectPatient={onSelectPatient}
      />
      <div className="w-[280px] bg-[#F9FAFB] border-r border-[#E5E6EA] flex flex-col h-screen">
        {/* Header */}
        <div className="p-4 border-b border-[#E5E6EA]">
          <div className="flex items-center justify-between mb-4">
            {/* LA ENTA Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="LA ENTA Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-[#030000]">LA ENTA</span>
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
                <MessageSquarePlus className="w-5 h-5 text-[#2C6AEC]" />
              </button>
            </div>
          </div>
        </div>

        {/* Patient List */}
        <div className="flex-1 overflow-y-auto">
          {sortedPatients.map((patient) => {
            const isRead = readPatients.has(patient.id);
            const showUnread = patient.unread && !isRead && !patient.urgent;
            const showUrgent = patient.urgent && !isRead;

            return (
            <div
              key={patient.id}
              onClick={() => handleSelectPatient(patient)}
              className={cn(
                "pl-3 pr-4 py-4 border-b border-[#E5E6EA] cursor-pointer transition-colors hover:bg-white relative",
                patient.id === selectedPatientId && "bg-white"
              )}
            >
              <div className="flex items-start gap-2">
                {/* Status Indicator - Fixed width container on left */}
                <div className="w-3 flex items-center justify-center flex-shrink-0 h-5">
                  {showUnread && (
                    <div className="w-2 h-2 rounded-full bg-[#2C6AEC]" />
                  )}
                  {showUrgent && (
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
          );
          })}
        </div>
      </div>
    </>
  );
}
