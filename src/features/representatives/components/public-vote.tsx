import { User } from "lucide-react";
import { representativesService } from "../instance";

export async function PublicVote() {
  const results = await representativesService.getVotesByRepresentative();

  return ( 
    <article className="flex flex-wrap gap-5 justify-center">
      {results.map((result) => {
        return (
          <section
            key={result.representativeName}
            className="pt-2 pb-4 px-4 w-52 border items-center shadow-sm rounded-md flex flex-col"
          >
            <div className="flex border-b w-full items-center gap-2 mb-3">
              <User size={14} />
              <h3 className="text-sm">{result.representativeName}</h3>
            </div>
            <p className="text-xl text-center font-semibold text-emerald-500">
              {result.votesCount}
            </p>
            <p className="text-xs">Public Votes</p>
          </section>
        );
      })}
    </article>
  );
}
