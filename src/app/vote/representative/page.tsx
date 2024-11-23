import { issueFeature } from "@/features"

export default async function Representative() {
  const issueList = issueFeature.service.getAll()
  return (
  <>
  <h1>Representative Vote Page</h1>
  <form action="">
    <select name="issueSelect" id="issueSelect">
    <option value="">Please choose an option</option>

    </select>
  </form>
  </>

  )
}
