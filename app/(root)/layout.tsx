import Header from "@/components/Header"
import {ReactNode } from "react"


function layout({children}:{children:ReactNode}) {
  return (
    <main className="min-h-screen text-gray-400">
        <Header/>
        <div className="container py-10">
         {children}
        </div>

    </main>
  )
}

export default layout
