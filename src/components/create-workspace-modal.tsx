"use client"

import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form"
import { ResponsiveModal } from "./responsive-modal"

export const CreateWorkspaceModal = () => {
  return (
    <ResponsiveModal open onOpenChange={() => {}}>
      <CreateWorkspaceForm />
    </ResponsiveModal>
  )
}