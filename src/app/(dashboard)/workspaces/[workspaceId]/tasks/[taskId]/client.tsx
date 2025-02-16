"use client"

import { DottedSeparator } from "@/components/dotted-separator"
import { PageError } from "@/components/page-error"
import { PageLoader } from "@/components/page-loader"
import { useGetTask } from "@/features/tasks/api/use-get-task"
import { TaskBreadCrumbs } from "@/features/tasks/components/task-bread-crumbs"
import { TaskOverview } from "@/features/tasks/components/task-overview"
import { useTaskId } from "@/features/tasks/hooks/use-task-id"

export const TaskIdClient = () => {
  const taskId = useTaskId()
  const { data, isLoading } = useGetTask({ taskId })

  if (isLoading) {
    return <PageLoader />
  }

  if (!data) {
    return <PageError message="Task not found" />
  }

  return (
    <div className="flex flex-col">
      <TaskBreadCrumbs task={data} project={data.project} />
      <DottedSeparator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={data} />
        {/* todo: test code to render loading */}
        
      </div>
    </div>
  )
}