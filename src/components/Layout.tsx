import { ReactNode } from "react"

interface props {
    children: ReactNode
}
export default function Layout({ children }: props) {
    return <>
        <div className="gap-6 grid grid-cols-layout grid-rows-1 bg-primary-light p-4 w-full min-h-screen font-roboto">
            { children }
        </div>
    </>
}