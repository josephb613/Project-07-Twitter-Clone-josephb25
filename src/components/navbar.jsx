
import { NavLink } from "react-router-dom";
import { navLinksData } from "../data/navdata"

const NavLinkItem = ({ to, icon, text }) => (

    <NavLink className="nav-link" to={to}>
        <ul>
            <li className=" ml-2 hover:bg-hoverPrimary p-3 rounded-full w-44 ">
                <img src={icon} alt="nav bar" />
                <p>{text}</p>
            </li>
        </ul>

    </NavLink>
);



export default function Navbar() {
    return (
        <div>
            <ul className="w-64 p-3 h-74 ">
                {navLinksData.map((link, index) => (
                    <NavLinkItem key={index} {...link} />
                ))}

                <button className="button-sidebar">Tweet</button>

            </ul>
        </div>
    );
}
``