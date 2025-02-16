"use client"

import { useTaskId } from "@/features/tasks/hooks/use-task-id"

export const TaskIdClient = () => {
  const taskId = useTaskId()
  
  return (
    <p>TaskId Client</p>
  )
}