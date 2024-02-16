import imageProfile from "../../assets/IconSVG/Profile-Photo.svg"
import imagevector from "../../assets/IconSVG/Vector.svg"
import ProfileSidebar from "../../components/ProfileSidebar"

import { NavLink } from "react-router-dom"

export default function Profile() {

    const nameProfile = "Bradley Ortiz"
    const newPost = "1 post"
    const numberFollowers = "4k"
    const numberFollowing = "30"

    return (
        <div>
            <div className="Profile-body">

                <div className="main">
                    <header className="header-profile">
                        <div className="p-3 rounded-full hover:bg-hoverPrimary">

                            <NavLink to="/home">    <img src={imagevector} alt="button return" /></NavLink>

                        </div>
                        <div>
                            <p className="text-[90%]">{nameProfile}</p>
                            <span className=" text-police" >{newPost}</span>
                        </div>
                    </header>

                    <div className="Content_profile">
                        <div className="ml-10">
                            <img src={imageProfile} alt="" className="image_Profile" />

                            <div className="content_info-one">
                                <p>{nameProfile}</p>
                                <span className="text-[90%] text-police">@bradley_</span>
                            </div>

                            <button className="ml-[40%] absolute -mt-24 border rounded-full p-2">Set up profile</button>


                            <div>
                                <span className="text-[90%] text-police">Joined January 2024</span>
                            </div>


                            <ul className="flex gap-2 text-[90%] text-police ">
                                <li className="text-white">{numberFollowers}  </li>
                                <li>Following</li>
                                <li className="text-white">{numberFollowing} </li>
                                <li >Followers </li>
                            </ul>
                        </div>
                    </div>

                    <ProfileSidebar />


                </div>
            </div>


        </div>
    );
}

