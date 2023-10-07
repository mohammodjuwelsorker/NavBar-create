import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen]  = useState(false)

    const routes = [
        { "name": "Home", "path": "/" },
        { "name": "About Us", "path": "/about" },
        { "name": "Services", "path": "/services" },
        { "name": "Contact Us", "path": "/contact" }
      ]
      
    return (
        <nav className="text-black bg-yellow-400 w-full">
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true ? <AiOutlineClose className="text-4xl "></AiOutlineClose>: <AiOutlineMenu className="text-4xl "></AiOutlineMenu>
            }
            
            </div>
            <ul className={`md:flex absolute md:static bg-yellow-400 duration-1000 ${
                open ? "left-0 ": "-left-60" }`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;