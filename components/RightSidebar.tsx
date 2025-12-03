"use client";

import { Phone, Mail, Calendar, FileText, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Patient } from "@/lib/data";

interface RightSidebarProps {
  patient: Patient;
}

export default function RightSidebar({ patient }: RightSidebarProps) {
  return (
    <div className="flex-1 bg-white overflow-y-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={patient.id}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="p-6"
        >
        {/* Patient Card */}
        <div className="bg-white border border-[#E5E6EA] rounded-xl p-6 mb-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#030000] mb-1">
              {patient.name}
            </h3>
            <p className="text-sm text-gray-500">Patient ID: {patient.patientId}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#030000]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Age / Gender</p>
                <p className="font-medium text-[#030000]">{patient.age} years • {patient.gender}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#030000]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="font-medium text-[#030000]">{patient.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-[#030000]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-[#030000]">{patient.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Context & Notes Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-[#2C6AEC]" />
            <h4 className="font-semibold text-[#030000]">Context & Notes</h4>
          </div>
          <div className="bg-[#F9FAFB] border border-[#E5E6EA] rounded-xl p-4">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {patient.contextNotes}
            </p>
            <div className="space-y-2">
              {patient.bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2C6AEC] mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Appointments Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-[#2C6AEC]" />
            <h4 className="font-semibold text-[#030000]">Upcoming Appointments</h4>
          </div>
          <div className="space-y-3">
            {patient.appointments.map((appointment, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E6EA] rounded-xl p-4 hover:border-[#2C6AEC] transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-[#030000] mb-1">
                      {appointment.title}
                    </p>
                    <p className="text-sm text-gray-500">with {appointment.doctor}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${
                      appointment.status === "upcoming"
                        ? "bg-[#2C6AEC] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {appointment.status === "upcoming" ? "Upcoming" : "Scheduled"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>{appointment.date}</span>
                  <span>•</span>
                  <span>{appointment.time}</span>
                  <span>•</span>
                  <span>{appointment.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Summary Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="w-5 h-5 text-[#2C6AEC]" />
            <h4 className="font-semibold text-[#030000]">Medical Summary</h4>
          </div>
          <div className="bg-[#F9FAFB] border border-[#E5E6EA] rounded-xl p-4">
            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase mb-2">
                  Diagnosis
                </h5>
                <p className="text-sm text-[#030000]">{patient.diagnosis}</p>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase mb-2">
                  Recent Tests
                </h5>
                <div className="space-y-2">
                  {patient.recentTests.map((test, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-[#030000]">{test.name}</span>
                      <span className="text-xs text-gray-500">{test.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase mb-2">
                  Treatment Plan
                </h5>
                <p className="text-sm text-[#030000]">{patient.treatmentPlan}</p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
