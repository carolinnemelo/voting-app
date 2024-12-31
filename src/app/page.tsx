import { Main, Card, CardTitle, CardContent } from "@/components";

export default function Home() {
  return (
    <Main>
      <Card className="my-auto p-4 flex-grow max-w-full flex-wrap text-center">
        <CardTitle className="mb-3 text-5xl">Welcome to Voting app</CardTitle>
        <CardContent>
          <p className="text-2xl font-medium py-2">
            Effortless voting and representative management.
          </p>
          <p>
            Manage Representatives: Add, edit, and review representatives with
            ease.
          </p>
          <p>
            Track Public Votes: Stay updated on voting results with clear and
            simple insights.
          </p>
          <p>Get Instant Statistics: See voting data and trends at a glance.</p>
          <p>Everything you need in one place. Quick, easy, and reliable.</p>
        </CardContent>
      </Card>
    </Main>
  );
}
