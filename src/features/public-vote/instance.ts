import { db } from "@/db";
import { createPublicVoteService } from "./service";
import { issueService } from "../issue";


export const publicVoteService = createPublicVoteService(db,  () => issueService.getAllRepresentativesEmails() );