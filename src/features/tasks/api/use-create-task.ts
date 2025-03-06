import { client } from "@/lib/rpc"; // axios
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.tasks["$post"], 200> // fetch: api/workspace method POST
type RequestType = InferRequestType<typeof client.api.tasks["$post"]>

// const daftarTasks = await useCreateTask()
// daftarTask
export const useCreateTask = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => { 
      const response = await client.api.tasks["$post"]({ json })

      if (!response.ok) {
        throw new Error("Failed to create task")
      }

      return await response.json()
    },
    onSuccess: () => {
      toast.success("Task Created")
      queryClient.invalidateQueries({ queryKey: ["tasks", "dataAlfito"] })
    },
    onError: () => {
      toast.error("Failed to create task")
    }
  });

  return mutation
};
