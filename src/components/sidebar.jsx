
// import "../style/App.css";
import iconTwitter from "../assets/IconSVG/Twitter.svg"
import iconPrivate from "../assets/IconSVG/Private.svg"
// import image
import profilePhoto from "../assets/images/profile-photo.png"
import Navbar from "./navbar";


export default function Sidebar() {

  return (

    <div className="sidebar">

      <img className="sidebar-icon-twitter" src={iconTwitter} alt="" />

      <Navbar />

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


