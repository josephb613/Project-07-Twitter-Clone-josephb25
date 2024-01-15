
import { NavLink } from "react-router-dom";
import "../style/App.css";


import iconHome from "../assets/IconSVG/Home.svg"
import iconExplore from "../assets/IconSVG/Explore.svg"
import iconNotifications from "../assets/IconSVG/Notifications.svg"
import iconMessages from "../assets/IconSVG/Messages.svg"
import iconBookmarks from "../assets/IconSVG/Bookmarks.svg"
import iconLists from "../assets/IconSVG/Lists.svg"
import iconProfile from "../assets/IconSVG/Profile.svg"
import iconMore from "../assets/IconSVG/Private.svg"


export default function Navbar() {
    return (
        <div>

            <ul>

                <NavLink className="alignement" to="/home" >
                    <img src={iconHome} alt="" /> <p>Home</p>
                </NavLink>

                <NavLink className="alignement" to="/explorer" >
                    <img src={iconExplore} alt="" />
                    <p>Explore</p>
                </NavLink>

                <NavLink className="alignement" to="/Notifications" >
                    <img src={iconNotifications} alt="logo" />
                    <p>Notifications</p>
                </NavLink>

                <NavLink className="alignement" to="/Messages" >
                    <img src={iconMessages} alt="logo" />
                    <p>Messages</p>
                </NavLink>

                <NavLink className="alignement" to="/Bookmarks" >
                    <img src={iconBookmarks} alt="logo" />
                    <p>Bookmarks</p>
                </NavLink>

                <NavLink className="alignement" to="/Lists" >
                    <img src={iconLists} alt="logo" />
                    <p>Lists</p>
                </NavLink>
                <NavLink className="alignement" to="/Profile" >
                    <img src={iconProfile} alt="logo" />
                    <p>Profile</p>
                </NavLink>

                <NavLink className="alignement" to="/More " >
                    <img src={iconMore} alt="logo" />
                    <p>More </p>
                </NavLink>

                <button className="button-sidebar">Tweet</button>
            </ul>
        </div>
    );
}

