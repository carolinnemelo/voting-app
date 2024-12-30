import { db } from "@/db";
import { createRepresentativeService } from "./service";

export const representativesService = createRepresentativeService(db);
