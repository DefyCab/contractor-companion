"use server";
import { revalidatePath } from "next/cache";
import { mainService } from "@/features/main/instance";



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
