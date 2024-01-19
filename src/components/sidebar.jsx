
import iconTwitter from "../assets/IconSVG/Twitter.svg"
import iconPrivate from "../assets/IconSVG/Private.svg"
import iconMore from "../assets/IconSVG/More-2.svg"
// import image
import profilePhoto from "../assets/images/profile-photo.png"
import Navbar from "./navbar";


export default function Sidebar() {

  const name = 'Bradley Ortiz'
  const username = '@bradley_'

  return (

    <div className="sidebar">

      <img className="sidebar-icon-twitter" src={iconTwitter} alt="" />

      <Navbar />

      <figure >
          <img src={profilePhoto} alt="Profile photo" className="profilePhoto" />
    
        <figcaption>
          <div className="figcaption-img">
            <p>{name}</p>
            <img src={iconPrivate} alt="image" />
          </div>
          <p className="username">{username}</p>
        </figcaption>
        <img src={iconMore} alt="icon More" className="iconMore" />
      </figure>

    </div>
  );
}


