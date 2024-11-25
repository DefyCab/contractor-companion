import { Contractor } from "@/actions/actions";
import { contractors } from "@/db/schema";

export function createRepository(db: any) {
  return {
    getContractors: async () => {
      const data: Contractor[] = await db.select().from(contractors);
      return data;
    },
  };
}
