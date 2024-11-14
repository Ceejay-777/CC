import NavBar from "@/components/navBar"
import { Toaster } from "react-hot-toast"
import { Outlet } from "react-router-dom"


const SharedLayout = () => {
  return (
    <div>
      <Toaster position="top-center"/>
        <div className="p-6 min-h-screen">
            <Outlet />
        </div>
        <NavBar />
    </div>
  )
}

export default SharedLayout