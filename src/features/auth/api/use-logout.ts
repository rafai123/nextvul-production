import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.auth.logout["$post"]>

export const useLogout = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => { 
      const response = await client.api.auth.logout["$post"]()

      // console.log(response)

      if (!response.ok) {
        throw new Error("Failed to logout")
      }

      return await response.json()
    },
    onSuccess: () => {
      toast.success("Logged Out")
      // window.location.reload()
      router.refresh()
      queryClient.invalidateQueries({ queryKey: ["current"] })
      queryClient.invalidateQueries({ queryKey: ["workspaces"]})
    },
    onError: (error) => {
      console.log(error)
      toast.error(`Failed to Log out. Error: ${error}`)
    }
  });

  return mutation
};
