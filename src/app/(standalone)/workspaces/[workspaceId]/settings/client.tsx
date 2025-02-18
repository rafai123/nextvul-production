"use client"

import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form"
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id"

export const WorkspaceIdSettingsClient = () => {
  const workspaceId = useWorkspaceId()
  const {data: initialValues} = useGetW
  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  )
}