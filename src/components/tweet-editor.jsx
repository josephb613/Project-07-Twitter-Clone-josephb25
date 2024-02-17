
import { Link } from "react-router-dom";
// ** import icons
import imageProfilePhoto from "../assets/images/profile-photo.png";
import ListIcons from "./ListIcons";

export default function TweetEditor() {

  return (

    <div className="flex items-start justify-start gap-[21px] px-4 py-[0.3rem] border-b-[#2F3336] border-b border-solid;}">
      <Link to="/profile">
        <img className="size-14" src={imageProfilePhoto} alt="image header" />
      </Link>
      <div>
        <form>
          <input className="p-4 w-56 font-sans mt-4 mb-4 text-xl  bg-black h-9" type="text" placeholder="What's happening ?" />
        </form>
        <div className=" flex gap-[50%] items-center p-1 ">
          <ListIcons/>
          <button className="button ml-36" >
            tweet
          </button>
        </div>
      </div>
    </div>
  );
}