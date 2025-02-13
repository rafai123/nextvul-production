import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config"
import { getMember } from "../members/utils"
import { Workspace } from "./types"
import { createSessionClient } from "@/lib/appwrite"
import { Query } from "node-appwrite"

export const getWorkspaces = async () => {
  // try {
    const { account, databases }  = await createSessionClient()
    const user = await account.get()

    const members = await databases.listDocuments(
      DATABASE_ID,
      MEMBERS_ID,
      [Query.equal("userId", user.$id)]
    )

    if (members.total === 0) {
      return { documents: [], total: 0 }
    }

    const workspaceIds = members.documents.map(member => member.workspaceId)

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACES_ID,
      [
        Query.orderAsc("$createdAt"),
        Query.contains("$id", workspaceIds)
      ]
    )

    return workspaces
  // } catch {
  //   return { documents: [], total: 0 }
  // }
}

interface GetWorkSpaceProps {
  workspaceId : string
}

export const getWorkspace = async ({ workspaceId }: GetWorkSpaceProps) => {
  // try {
    const { account, databases } = await createSessionClient()
    const user = await account.get()

    const member = await getMember({
      databases,
      userId: user.$id,
      workspaceId
    })

    if (!member) {
      throw new Error("Unauthorized")
    }

    const workspaces = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACES_ID,
      workspaceId
    )

    return workspaces
  // } catch {
  //   return null
  // }
}

interface GetWorkSpaceInfoProps {
  workspaceId : string
}

export const getWorkspaceInfo = async ({ workspaceId }: GetWorkSpaceInfoProps) => {
  // try {
    const { databases } = await createSessionClient()

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACES_ID,
      workspaceId
    )

    return {
      name: workspace.name
    }
  // } catch {
  //   return null
  // }
}