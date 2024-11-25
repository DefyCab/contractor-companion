import { createRepository } from "./repository";

export function createService(db: any) {
  const repository = createRepository(db);

  return {
    getContractors: async () => {
        return await repository.getContractors()
    }
  }
}
