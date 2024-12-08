import { db } from "@/db";
import { createPublicVoteService } from "./service";

export const publicVoteService =  createPublicVoteService(db);