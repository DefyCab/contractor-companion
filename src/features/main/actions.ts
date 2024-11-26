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
  const ceilingHeight = Number(formData.get("ceilingheight"))
  const wallLength = Number(formData.get("wallLength"));
  const numberOfWalls = Number(formData.get("numberOfWindows"));
  const numberOfWindows = Number(formData.get("numberOfDoors"));
  const numberOfDoors = Number(formData.get("numbefOfCoats"));

  const roomData = {
    ceilingHeight,
    wallLength,
    numberOfWalls,
    numberOfWindows,
    numberOfDoors,
  };

  await mainService.sendRoomData(roomData);
}
