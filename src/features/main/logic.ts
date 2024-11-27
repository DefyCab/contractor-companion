import { RoomData } from "./types";

export function calculatePaint(roomData: RoomData) {
  // standardmått dörr 1.76 kvm
  // standardmått fönster 0.65 kvm

  let ceilingHeight = roomData.ceilingHeight;

  if (ceilingHeight === 0) {
    ceilingHeight = 2.7;
  }

  const surfaceInSquareMeters =
    ceilingHeight * roomData.wallLength -
    (roomData.numberOfDoors * 1.76 + roomData.numberOfWindows * 0.65);

  const litersNeeded = surfaceInSquareMeters / 4.5;

  return Math.round(litersNeeded);
}
