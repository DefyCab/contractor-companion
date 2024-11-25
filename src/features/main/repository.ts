import { Contractor } from "./types"
import { contractors } from "@/db/schema";

export function createRepository(db: any) {
  return {
    getContractors: async () => {
      const data: Contractor[] = await db.select().from(contractors);
      return data;
    },

    addContrator: async (id: number, name: string, email: string) => {
      await db.insert(contractors).values({
        id: id,
        name: name,
        email: email,
      });
    },
  };
}
