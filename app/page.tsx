"use client";

import { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import CenterColumn from "@/components/CenterColumn";
import RightSidebar from "@/components/RightSidebar";
import { patients, Patient } from "@/lib/data";

export default function Home() {
  // Default to Sara Klarna (id: 1) on load
  const [selectedPatient, setSelectedPatient] = useState<Patient>(
    patients.find(p => p.id === 1) || patients[0]
  );

  return (
    <main className="flex h-screen overflow-hidden bg-white">
      <LeftSidebar
        patients={patients.slice(0, 8)}
        selectedPatientId={selectedPatient.id}
        onSelectPatient={(patient) => setSelectedPatient(patient)}
      />
      <CenterColumn patient={selectedPatient} />
      <RightSidebar patient={selectedPatient} />
    </main>
  );
}
