import { RoomInformationForm } from "@/features/main/components/room-information-form";
import { BottomNav } from "@/features/main/components/bottom-nav";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <RoomInformationForm />
      </div>
    </div>
  );
}
