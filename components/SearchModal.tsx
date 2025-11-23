"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { User, Calendar, FileText, Stethoscope } from "lucide-react";

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const patients = [
  "Marcus Chen",
  "Sarah Williams",
  "James Rodriguez",
  "Emily Thompson",
  "David Park",
  "Jennifer Martinez",
  "Michael Brown",
  "Lisa Anderson",
  "Robert Taylor",
  "Amanda Garcia",
  "Christopher Lee",
  "Patricia Johnson",
  "Daniel Kim",
  "Maria Gonzalez",
  "Kevin Wright",
  "Rachel Mitchell",
  "Thomas Harris",
  "Nicole Davis",
];

const quickActions = [
  { icon: User, label: "New Patient", action: "new-patient" },
  { icon: Calendar, label: "Schedule Appointment", action: "schedule" },
  { icon: FileText, label: "View Notes", action: "notes" },
  { icon: Stethoscope, label: "Medical Records", action: "records" },
];

export default function SearchModal({ open, onOpenChange }: SearchModalProps) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 shadow-lg max-w-[640px]">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput
            placeholder="Search patients, appointments, or actions..."
            className="h-12"
          />
          <CommandList className="max-h-[400px]">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Quick Actions">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <CommandItem
                    key={action.action}
                    onSelect={() => {
                      console.log(`Selected action: ${action.action}`);
                      onOpenChange(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Icon className="mr-2 h-4 w-4 text-[#5538DE]" />
                    <span>{action.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Patients">
              {patients.map((patient) => (
                <CommandItem
                  key={patient}
                  onSelect={() => {
                    console.log(`Selected patient: ${patient}`);
                    onOpenChange(false);
                  }}
                  className="cursor-pointer"
                >
                  <User className="mr-2 h-4 w-4 text-gray-400" />
                  <span>{patient}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
