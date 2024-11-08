import { ReactNode } from "react"

const Sectionheader = ({children}: {children: ReactNode}) => {
  return (
    <h2 className="font-bold text-xl mb-4 font-mono tracking-tight">{children}</h2>
  )
}

export default Sectionheader