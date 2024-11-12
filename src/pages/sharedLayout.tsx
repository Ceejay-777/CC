import NavBar from "@/components/navBar"
import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return (
    <div>
        <div className="p-6 min-h-screen">
            <Outlet />
        </div>
        <NavBar />
    </div>
  )
}

export default SharedLayout