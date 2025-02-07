"use client"

import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form"
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id"

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId()
  return (
    <div>
      <p>{workspaceId}</p>
      {/* <CreateWorkspaceForm /> */}
    </div>
  )
}

export default WorkspaceIdPage