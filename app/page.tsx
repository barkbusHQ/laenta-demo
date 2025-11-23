import LeftSidebar from "@/components/LeftSidebar";
import CenterColumn from "@/components/CenterColumn";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden bg-white">
      <LeftSidebar />
      <CenterColumn />
      <RightSidebar />
    </main>
  );
}
