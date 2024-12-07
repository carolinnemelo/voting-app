import { db } from "@/db";
import { createIssueService } from "./service";


export const issueService = createIssueService(db);
