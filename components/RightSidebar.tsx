"use client";

import { Phone, Mail, Calendar, FileText, Stethoscope } from "lucide-react";

export default function RightSidebar() {
  return (
    <div className="flex-1 bg-white overflow-y-auto">
      <div className="p-6">
        {/* Patient Card */}
        <div className="bg-white border border-[#E5E6EA] rounded-xl p-6 mb-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#030000] mb-1">
              Marcus Chen
            </h3>
            <p className="text-sm text-gray-500">Patient ID: #45821</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#030000]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Age / Gender</p>
                <p className="font-medium text-[#030000]">42 years • Male</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-[#030000]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="font-medium text-[#030000]">(415) 555-0182</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="w-8 h-8 rounded-lg bg-[#F9FAFB] flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-[#030000]" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-[#030000]">marcus.chen@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Context & Notes Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-[#5538DE]" />
            <h4 className="font-semibold text-[#030000]">Context & Notes</h4>
          </div>
          <div className="bg-[#F9FAFB] border border-[#E5E6EA] rounded-xl p-4">
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Patient presented with progressive hearing loss over the past 2 years.
              Works in tech industry, concerned about communication in meetings.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5538DE] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Recent audiometry shows mild high-frequency hearing loss
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5538DE] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  No significant medical history affecting ENT
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5538DE] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Prefers discreet hearing aid options
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-[#5538DE]" />
            <h4 className="font-semibold text-[#030000]">Upcoming Appointments</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-[#E5E6EA] rounded-xl p-4 hover:border-[#5538DE] transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-[#030000] mb-1">
                    Hearing Aid Fitting
                  </p>
                  <p className="text-sm text-gray-500">with Dr. Martinez</p>
                </div>
                <span className="text-xs bg-[#5538DE] text-white px-2 py-1 rounded-md">
                  Upcoming
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Thu, Nov 23</span>
                <span>•</span>
                <span>11:00 AM</span>
                <span>•</span>
                <span>60 min</span>
              </div>
            </div>

            <div className="bg-white border border-[#E5E6EA] rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium text-[#030000] mb-1">
                    Follow-up Consultation
                  </p>
                  <p className="text-sm text-gray-500">with Dr. Martinez</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                  Scheduled
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Mon, Dec 4</span>
                <span>•</span>
                <span>2:30 PM</span>
                <span>•</span>
                <span>30 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Summary Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Stethoscope className="w-5 h-5 text-[#5538DE]" />
            <h4 className="font-semibold text-[#030000]">Medical Summary</h4>
          </div>
          <div className="bg-[#F9FAFB] border border-[#E5E6EA] rounded-xl p-4">
            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase mb-2">
                  Diagnosis
                </h5>
                <p className="text-sm text-[#030000]">
                  Bilateral high-frequency sensorineural hearing loss
                </p>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase mb-2">
                  Recent Tests
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#030000]">Pure Tone Audiometry</span>
                    <span className="text-xs text-gray-500">Nov 12, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#030000]">Tympanometry</span>
                    <span className="text-xs text-gray-500">Nov 12, 2024</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-medium text-gray-500 uppercase mb-2">
                  Treatment Plan
                </h5>
                <p className="text-sm text-[#030000]">
                  Hearing aid fitting and adjustment, followed by regular follow-ups
                  to ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
