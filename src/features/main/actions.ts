"use server";
import { revalidatePath } from "next/cache";
import { mainService } from "@/features/main/instance";

export async function roomInformation() {}

export async function addContractor(formData: FormData) {
  const id = formData.get("id") as unknown;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const content = { id, name, email };

  if (!content) {
    return;
  }
  await mainService.sendContractor(id, name, email);

  revalidatePath("/");
}

export async function getRoomData(formData: FormData) {
  const ceilingHeight = Number(formData.get("ceilingHeight"));
  const wallLength1 = Number(formData.get("wall0"));
  const wallLength2 = Number(formData.get("wall1"));
  const wallLength3 = Number(formData.get("wall2"));
  const wallLength4 = Number(formData.get("wall3"));
  const numberOfWindows = Number(formData.get("numberOfWindows"));
  const numberOfDoors = Number(formData.get("numberOfDoors"));

  let wallLength = wallLength1 + wallLength2 + wallLength3 + wallLength4;

  const roomData = {
    ceilingHeight,
    wallLength,
    numberOfWindows,
    numberOfDoors,
  };

  await mainService.sendRoomData(roomData);
}
