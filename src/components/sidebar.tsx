import Image from "next/image"
import Link from "next/link"
import { DottedSeparator } from "./dotted-separator"
import { Navigation } from "./navigation"
import { WorkspaceSwitcher } from "./workspace-switcher"
import { Projects } from "./projects"

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href={"/"}>
        <Image src={"/nextvulWHite.svg"} width={100} height={100} alt="Nextvul" />
      </Link>
      <DottedSeparator />
      <WorkspaceSwitcher />
      <DottedSeparator />
      <Navigation />
      <Projects />
    </aside>
  )
}