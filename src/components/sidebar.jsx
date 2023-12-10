
import { NavLink } from "react-router-dom";
import "../style/App.css";
import iconTwitter from "../assets/Icons/Twitter.png"
import iconHome from "../assets/Icons/Home.png"
import iconExplore from "../assets/Icons/Explore.png"
import iconNotifications from "../assets/Icons/Notifications.png"
import iconMessages from "../assets/Icons/Messages.png"
import iconBookmarks from "../assets/Icons/Bookmarks.png"
import iconLists from "../assets/Icons/Lists.png"
import iconProfile from "../assets/Icons/Profile.png"
import iconMore from "../assets/Icons/More.png"
import iconPrivate from "../assets/Icons/Private.png"

// import image
import profilePhoto from "../assets/images/profile-photo.png"


function Sidebar() {

  return (

    <div className="sidebar">

      <img className="sidebar-icon-twitter" src={iconTwitter} alt="" />

      <ul>

        <NavLink className="alignement" to={`/Bookmarks}`} >
          <img src={iconHome} alt="" />
          <p>Home</p>
        </NavLink>

        <NavLink className="alignement" to={`/icon Media}`} >
          <img src={iconExplore} alt="" />
          <p>Explore</p>
        </NavLink>

        <NavLink className="alignement" to={`/icon Media}`} >
          <img src={iconNotifications} alt="logo" />
          <p>Notifications</p>
        </NavLink>

        <NavLink className="alignement" to={`/icon Media}`} >
          <img src={iconMessages} alt="logo" />
          <p>Messages</p>
        </NavLink>

        <NavLink className="alignement" to={`/icon Media}`} >
          <img src={iconBookmarks} alt="logo" />
          <p>Bookmarks</p>
        </NavLink>

        <NavLink className="alignement" to={`/icon Media}`} >
          <img src={iconLists} alt="logo" />
          <p>Lists</p>
        </NavLink>
        <NavLink className="alignement" to={`/icon Media}`} >
          <img src={iconProfile} alt="logo" />
          <p>Profile</p>
        </NavLink>

        <NavLink className="alignement" to={`/icon Media}`} >
          <img src={iconMore} alt="logo" />
          <p>More </p>
        </NavLink>

        <NavLink className="alignement" to={`/icon Media}`} >

        </NavLink>

        <button className="button-sidebar">Tweet</button>
      </ul>


      <figure className="footer-sidebar">
        <img src={profilePhoto} alt="Profile photo" className="small-image" />
        <figcaption>
          <div className="footer-sidebar-content">
            <p>Bradley Ortiz</p>
            <img src={iconPrivate} alt="image" />
          </div>
          <span className="username">@bradley</span>
        </figcaption>
      </figure>

    </div>
  );
}

export default Sidebar;
