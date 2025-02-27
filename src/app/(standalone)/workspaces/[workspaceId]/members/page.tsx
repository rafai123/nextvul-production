import { getCurrent } from '@/features/auth/queries'
import { MembersList } from '@/features/workspaces/components/members-list'
import { redirect } from 'next/navigation'
import React from 'react'

const WorkspaceIdMembersPage = async () => {
  const user = await getCurrent()
  if (!user) redirect('/sign-in')
  return (
      <MembersList />
  )
}

export default WorkspaceIdMembersPage