import { Link } from "react-router-dom"
import imageNewYorkTimes from "../assets/images/Nework-times.png"
import imageCnn from "../assets/images/tweet-profile-photo-cnn.png"
import iconVerified from "../assets/Icons/Verified.png"
import logoTweeter from "../assets/images/Logo-tweeter.png"

export default function TrendFollow() {
    return (
        <>
            <div className="trends-follow">
                <h4>Who to follow</h4>

                <div className="trends-container">

                    <img className="trends-image" src={imageNewYorkTimes} alt="" />

                    <div>
                        <div className="trends-icon">
                            <h6 className="name">The New York Times</h6>
                            <img src={iconVerified} alt="icon Verified" />
                        </div>
                        <p>@nytimes</p>
                    </div>
                    <button className="btn-follow" >follow</button>
                </div>

                <div className="trends-container">

                    <img className="trends-image" src={imageCnn} alt="" />

                    <div>
                        <div className="trends-icon">
                            <h6>CNN</h6>
                            <img src={iconVerified} alt="icon Verified" />
                        </div>
                        <p>@CNN</p>
                    </div>

                    <button className="btn-follow positio-left" >follow</button>

                </div>



                <div className="trends-container">

                    <img className="trends-image" src={logoTweeter} alt="" />

                    <div>
                        <div className="trends-icon ">
                            <h6>Twitter</h6>
                            <img src={iconVerified} alt="icon Verified" />
                        </div>
                        <p>@Twitter</p>
                    </div>
                    <button className="btn-follow positio-left" >follow</button>
                </div>
                <Link to={`/voire plus`}>
                    <p className="btn-show">Show more</p>
                </Link>
            </div>
        </>
    );
}

