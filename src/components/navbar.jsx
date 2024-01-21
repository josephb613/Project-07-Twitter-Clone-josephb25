
import { NavLink } from "react-router-dom";
import { navLinksData } from "../data/navdata"

const NavLinkItem = ({ to, icon, text }) => (

    <NavLink className="nav-link" to={to}>
        <ul>
            <li>
                <img src={icon} alt="nav bar" />
                <p>{text}</p>
            </li>
        </ul>

    </NavLink>
);



export default function Navbar() {
    return (
        <>
            <ul>
                {navLinksData.map((link, index) => (
                    <NavLinkItem key={index} {...link} />
                ))}

                <button className="button-sidebar">Tweet</button>
                
            </ul>
        </>
    );
}
