import { db } from "@/db";
import { createPublicVoteService } from "./service";

export const representativesService = createPublicVoteService(db);
