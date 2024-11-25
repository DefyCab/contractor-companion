import { createRepository } from "./repository";

export function createService(db: any) {
  const repository = createRepository(db);

  return {
    getContractors: async () => {
      return await repository.getContractors();
    },
    sendContractor: async (id: any, name: string, email: string) => {
      await repository.addContrator(id, name, email);
    },
  };
}
