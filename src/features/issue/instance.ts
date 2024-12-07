import { db } from "@/db";
import { createIssueService } from "./service";


export const issueFeature = createIssueService(db);
