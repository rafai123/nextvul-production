import { Loader2 } from 'lucide-react'
import React from 'react'

const DashboardLoading = () => {
  return (
    <div className='h-full md:min-h-screen flex items-center justify-center '>
      <Loader2 className='size-6 md:size-10 animate-spin text-muted-foreground' />
    </div>
  )
}

export default DashboardLoading