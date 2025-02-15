import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.tasks["bulk-update"]["$post"], 200> // fetch: api/workspace method POST
type RequestType = InferRequestType<typeof client.api.tasks["bulk-update"]["$post"]>

export const useBulkUpdateTasks = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => { 
      const response = await client.api.tasks["bulk-update"]["$post"]({ json })
      console.log(response)

      if (!response.ok) {
        throw new Error("Failed to update task")
      }

      return await response.json()
    },
    onSuccess: () => {
      toast.success("Tasks Updated")
      queryClient.invalidateQueries({ queryKey: ["tasks"] })
    },
    onError: () => {
      toast.error("Failed to update tasks")
    }
  });

  return mutation
};
