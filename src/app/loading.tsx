"use client"

import { Loader } from 'lucide-react'
import React from 'react'

const ErrorPage = () => {
  return (
    <div className='h-screen flex flex-col gap-y-2 items-center justify-center'>
      <Loader className='animate-spin size-6' />
    </div>
  )
}

export default ErrorPage