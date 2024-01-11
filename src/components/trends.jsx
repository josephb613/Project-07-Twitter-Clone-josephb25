import { Link } from "react-router-dom"
import imageNewYorkTimes from "../assets/images/Nework-times.png"
import imageCnn from "../assets/images/tweet-profile-photo-cnn.png"
import iconVerified from "../assets/Icons/Verified.png"
import logoTweeter from "../assets/images/Logo-tweeter.png"
import iconVector from "../assets/Icons/Vector.png"
import iconSettings from "../assets/Icons/Settings.png"
import iconMore from "../assets/Icons/More-2.png"



function Trends() {
    return (
        <div className="trends">

            <div className="input-container">
                <div className="icon"><img src={iconVector} alt="icone de recherche" /></div>
                <div className="camp-input"><input type="text" placeholder="Search Twitter" /></div>
            </div>

            <div className="trends-list">

                <div className="trends-content">

                    <div className="position" >
                        <h4>Trands for you</h4>
                        <img src={iconSettings} alt="" />
                    </div>



                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>

                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>

                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>

                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>
                    <Link to={`/voire plus`}>
                        <p className="btn-show">Show more</p>
                    </Link>
                </div>

            </div>


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
            <div className="footer-trends-follow">
                <ul>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>

                </ul>

                <ul><li>Imprint</li>
                    <li>Ads info</li>
                    <li>More ...</li>
                    <li>© 2021 Twitter, Inc.</li>
                </ul>
            </div>
        </div>
    );
}

export default Trends;
