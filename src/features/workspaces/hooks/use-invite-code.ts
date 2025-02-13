// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export const useInviteCode = () => {
//   const params = useParams();
//   const [inviteCode, setInviteCode] = useState<string | null>(null);

//   useEffect(() => {
//     if (params.inviteCode) {
//       setInviteCode(params.inviteCode as string);
//     }
//   }, [params.inviteCode]); // Akan trigger setiap kali params.inviteCode berubah

//   return inviteCode as string;
//   // return params.useWorkspaceId as string
// };


import { useParams } from "next/navigation"

export const useInviteCode = () => {
  const params = useParams()

  return params.inviteCode as string
}