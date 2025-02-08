
import { getCurrent } from "@/features/auth/actions"
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form"
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id"
import { redirect } from "next/navigation"

const WorkspaceIdPage = async () => {
  // const workspaceId = useWorkspaceId()
  const user = await getCurrent()
  if (!user) redirect("/sign-in")

  return (
    <div>
      <p>workspaceId</p>
      {/* <CreateWorkspaceForm /> */}
    </div>
  )
}

export default WorkspaceIdPage