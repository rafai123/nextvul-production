"use client"

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <div className='h-screen flex flex-col gap-y-2 items-center justify-center'>
      <AlertTriangle />
      <p className='text-sm text-muted-foreground'>
        Something Went Wrong
      </p>
      <Button variant={"secondary"} asChild>
        <Link href={"/"}>
          Back To Home
        </Link>
      </Button>
    </div>
  )
}

export default ErrorPage