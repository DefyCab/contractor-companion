import { calculatePaint } from "./logic";
import { createRepository } from "./repository";
import { RoomData } from "./types";

export function createService(db: any) {
  const repository = createRepository(db);

  return {
    getContractors: async () => {
      return await repository.getContractors();
    },
    sendContractor: async (id: any, name: string, email: string) => {
      return await repository.addContrator(id, name, email);
    },
    sendRoomData: async (roomData: RoomData) => {
      return calculatePaint(roomData);
    },
  };
}
