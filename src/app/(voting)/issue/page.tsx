import { issueFeature } from "@/features";

export default async function IssuePage() {
  try {
    // Busca de dados feita no servidor
    const issues = await issueFeature.service.getAllIssuesAndChoices();

    return (
      <div>
        <h1>Issues</h1>
        <pre>{JSON.stringify(issues, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar issues:", error);
    return <p>Erro ao carregar os dados.</p>;
  }
}