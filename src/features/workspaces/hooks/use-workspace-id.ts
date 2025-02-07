"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useWorkspaceId = () => {
  const params = useParams();
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);

  useEffect(() => {
    if (params.workspaceId) {
      setWorkspaceId(params.workspaceId as string);
    }
  }, [params.workspaceId]); // Akan trigger setiap kali params.workspaceId berubah

  return workspaceId as string;
  // return params.useWorkspaceId as string
};


// "use client"

// import { useParams } from "next/navigation"

// export const useWorkspaceId = () => {
//   const params = useParams()

//   return params.useWorkspaceId as string
// }