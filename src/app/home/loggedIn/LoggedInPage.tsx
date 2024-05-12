'use client'
import LargeButton from "@/components/buttons/LargeButton";
import ScribeEditor from "@/components/editor/ScribeEditor";
import Link from 'next/link'

export default function LoggedInPage()
{
    return(
        <div className="h-screen">
  <div className="h-full flex">
    <div className="w-full flex flex-col">
      <div className="pt-20"></div>
      <div className="flex-grow flex flex-row h-full overflow-auto">
        <div className="w-2/12 overflow-auto border-e-4 border-black">
          <div className="flex flex-col">
            <text>Hamburger menu</text>
            <Link href="/editor">editor</Link>
            </div>
        </div>
        <div className="w-10/12 overflow-auto">
          <div className="h-[1000px] bg-blue-300">This section will hold suggestions and other pinned pages</div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}