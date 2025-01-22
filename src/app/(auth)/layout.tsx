'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({children}: AuthLayoutProps) => {

  const pathName = usePathname()

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/nextvulWhite.svg" alt="Logo" width={100} height={56} />
          <Button asChild variant={"secondary"}>
            <Link href={pathName === "/sign-in" ? "/sign-up" : "/sign-in"}>
              {pathName === `/sign-in` ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout