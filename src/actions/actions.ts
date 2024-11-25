"use server";
import { revalidatePath } from "next/cache";
import { mainService } from "@/features/main/instance";

export type Contractor = {
  id: number;
  name: string;
  email: string;
};

export async function addContractor(formData: FormData) {
  const id = formData.get("id") as any;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const content = { id, name, email };

  if (!content) {
    return;
  }
  await mainService.sendContractor(id, name, email);

  revalidatePath("/");
}

// export const sendContrator = async (
//   id: number,
//   name: string,
//   email: string
// ) => {
//   await db.insert(contractors).values({
//     id: id,
//     name: name,
//     email: email,
//   });
// };
