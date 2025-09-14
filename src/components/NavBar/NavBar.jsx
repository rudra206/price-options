import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];


    return (
        <nav className="text-black bg-yellow-100 p-6">
            <div className="text-4xl md:hidden "  onClick={()=>setOpen(!open)}>
                {
                    open === true ? <IoClose ></IoClose> :  <IoMdMenu ></IoMdMenu>
                }
                 
            </div>
            <ul className={`md:flex duration-1000 absolute md:static 
                ${open? 'top-20' : '-top-40'}
                bg-yellow-100 px-6  `}>
                {
                    routes.map(route => <Link key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;