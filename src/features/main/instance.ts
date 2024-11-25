export function create() {}

import { db } from "../../db/drizzle";
import { createService } from "./service";

export const mainService = createService(db);
