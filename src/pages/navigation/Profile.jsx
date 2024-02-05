import imageProfile from "../../assets/IconSVG/Profile-Photo.svg"
import imagevector from "../../assets/IconSVG/Vector.svg"
import ProfileRoute from "../../components/Profile-Route"



export default function Profile() {

    const nameProfile = "Bradley Ortiz"
    const newPost = "1 post"
    const numberFollowers = "4k"
    const numberFollowing = "30"

    return (
        <>
            <div className="Profile-body">

                <div className="main">
                    <div className="header-profile">
                        <div><img src={imagevector} alt="" /></div>

                        <div>
                            <p>{nameProfile}</p>
                            <span>{newPost}</span>
                        </div>
                    </div>

                    <div className="Content_profile">

                        <img src={imageProfile} alt="" className="image_Profile" />
                        <div className="content_info-one">
                            <p>{nameProfile}</p>
                            <span>@bradley_</span>
                        </div>

                        <button className="btn-profile">Set up profile</button>


                        <div className="content_info-two">
                            <span>Joined January 2024</span>
                        </div>


                        <ul className="info-container">
                            <li>{numberFollowers} Following </li>
                            <li>{numberFollowing} Followers </li>
                        </ul>

                    </div>

                    <ProfileRoute />
              

                </div>
            </div>


        </>
    );
}

