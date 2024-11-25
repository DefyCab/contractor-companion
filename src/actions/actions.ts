"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { contractors } from "@/db/schema";

export type Contractor = {
  id: number;
  name: string;
  email: string;
};

// export const getContractors = async () => {
//   const data: Contractor[] = await db.select().from(contractors);
//   return data;
// };

export async function addContractor(formData: FormData) {
  const id = formData.get("id") as any;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const content = { id, name, email };

  if (!content) {
    return;
  }
  await sendContrator(id, name, email);

  revalidatePath("/");
}

export const sendContrator = async (
  id: number,
  name: string,
  email: string
) => {
  await db.insert(contractors).values({
    id: id,
    name: name,
    email: email,
  });
};
