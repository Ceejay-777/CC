import { List, X, Calculator } from "lucide-react"
import { NavLink } from "react-router-dom"

const links = [
    { href: "/", label: "Home", Icon: List },
    { href: "/calculate", label: "Calculate", Icon: Calculator },
    { href: "/none", label: "Empty", Icon: X },
    { href: "/none", label: "Empty", Icon: X },
    { href: "/none", label: "Empty", Icon: X },
]

const NavBar = () => {
    return (
        <nav className="w-screen h-14 fixed bottom-0 bg-black">
            <ul className="flex items-center h-full w-full">
                {links.map((link, index) => {
                    const { href, label, Icon } = link
                    return (
                        <li className="w-1/5 h-full" key={index}> {/*Change key later*/}
                            <NavLink to={href} className={({ isActive }) =>
                                `w-full h-full flex flex-col border-t-4 border-black justify-center items-center ${isActive && "border-zinc-400"}`
                            }>
                                <Icon size={26} color={'white'} />
                                <p className="text-white text-xs">{label}</p>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}

export default NavBar