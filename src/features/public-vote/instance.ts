import { db } from "@/db";
import { createPublicVoteService } from "./service";
import { issueService } from "../issues";


export const publicVoteService = createPublicVoteService(db,  () => issueService.getAllRepresentativesEmails() );