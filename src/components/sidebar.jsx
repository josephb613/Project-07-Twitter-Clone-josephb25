import { NavLink } from "react-router-dom";
// ** import assets
import profilePhoto from "../assets/images/profile-photo.png";
import iconPrivate from "../assets/IconSVG/Private.svg";
import iconMore from "../assets/IconSVG/More-2.svg";

// ** import components
import Navbar from "./navbar";
import IconTwitter from "./IconTwitter";
import MoreIcon from "./btn/moreIcon";

export default function Sidebar() {
  const name = "Bradley Ortiz";
  const username = "@bradley_";

  return (
    <div className="sidebar flex-col p-2 ">
      <div className=" w-64 ml-12">
        <div className="ml-5 mt-3  hover:bg-hoverPrimary w-14 rounded-full p-2">
          <IconTwitter />
        </div>

        <Navbar />

        <NavLink to="/Profile" className=" flex w-[100%] h-[9%] mt-5 p-4 hover:bg-hoverPrimary delay-150 rounded-full ">
          <img src={profilePhoto} className="w-10  mr-3  h-10" />
          <div>
            <div className="flex w-40 gap-2 ">
              <p className="text-sm ">{name}</p>
              <img src={iconPrivate} alt="image" />
            </div>
            <p className=" text-police font-bold text-sm">{username}</p>
          </div>

          <div className="mt-2 ">
            <MoreIcon />
          </div>
        </NavLink>

      </div>
    </div>
  );
}
