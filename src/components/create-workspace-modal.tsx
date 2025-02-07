"use client"

import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form"
import { ResponsiveModal } from "./responsive-modal"
import { useCreateWorkspaceModal } from "@/features/workspaces/hooks/use-create-workspace-modal"

export const CreateWorkspaceModal = () => {

  const { isOpen, setIsOpen, close } = useCreateWorkspaceModal()

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  )
}