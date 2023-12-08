import { Link } from "react-router-dom"
import mesImages from "../assets/images/Nework-times.png"
import ImageCnn from "../assets/images/tweet-profile-photo-cnn.png"
import imagePlante from "../assets/images/tweet-image.png"
import logoTweeter from "../assets/images/Logo-tweeter.png"

// import des icons
import iconReply from "../assets/Icons/Reply.png"
import iconVerified from "../assets/Icons/Verified.png"
import iconRetweet from "../assets/Icons/Retweet.png"
import iconReact from "../assets/Icons/React.png"
import iconShare from "../assets/Icons/Share.png"



function Tweets() {
    return (
        <div className="tweets">
            {/* SECTION 1 */}

            <div className="tweet">
                <img className="tweet-avatar" src={ImageCnn} alt="logo de tweeter" />
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">
                            <p>CNN</p>
                            <img src={iconVerified} alt="icon Verified" />
                            <p>@CNN</p>
                            <p>. 7m</p>
                        </div>
                        <p className="tweet-text">President Joe Biden touted a new agreement reached with the European Union to ease
                            Trump-era tariffs on aluminum and steel as a "major
                            breakthrough" that would serve to both strengthen
                            the US steel industry and combat the global climate crisis.</p>
                    </div>
                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={iconReply} alt="icon Reply" />
                            <p>57</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconRetweet} alt="icon Retweet" />
                            <p>144</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconReact} alt="icon React" />
                            <p>184</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconShare} alt="icon Share" />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2 New York Times*/}
            <div className="tweet">
                <img className="tweet-avatar" src={mesImages} alt="logo newyork" />

                <div className="tweet-content">

                    <div className="tweet-body">
                        <div className="tweet-title">
                            <p>The New York Times</p>
                            <img src={iconVerified} alt="The New York Times" />
                            <p>@nytimes</p>
                            <p>. 2h</p>
                        </div>

                        <p className="tweet-text">Gardening boomed during the pandemic. Six Black writers share
                            how it has helped them re-establish, and reimagine, a connection
                            to cultivation and the land.</p>
                        <img className="tweet-image" src={imagePlante} alt="image central de la plante" />

                    </div>

                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <Link to={`www.google.com}`}><img src={iconReply} alt="icon Reply" /></Link>
                            <p>19</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconRetweet} alt="icon Retweet" />
                            <p>48</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconReact} alt="icon React" />
                            <p>482</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconShare} alt="icon Share" />
                        </div>

                    </div>

                </div>
            </div>

            {/* SECTION 3 */}


            <div className="tweet">
                <img className="tweet-avatar" src={logoTweeter} alt="logo de tweeter" />
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">
                            <p>Twitter</p>
                            <img src={iconVerified} alt="icon Verified" />
                            <p>@Twitter</p>
                            <p>. Oct 29</p>
                        </div>
                        <p className="tweet-text">BIG NEWS lol jk still Twitter</p>
                    </div>
                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={iconReply} alt="icon Reply" />
                            <p>6.8K</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconRetweet} alt="icon Retweet" />
                            <p>36.6K</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconReact} alt="icon React" />
                            <p>261.1K</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconShare} alt="icon Share" />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4 */}

            <div className="tweet">
                <img className="tweet-avatar" src={logoTweeter} alt="logo de tweeter" />
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">
                            <p>Twitter</p>
                            <img src={iconVerified} alt="icon Verified" />
                            <p>@Twitter</p>
                            <p>.  Oct 4</p>
                        </div>
                        <p className="tweet-text">hello literally everyone</p>
                    </div>
                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={iconReply} alt="icon Reply" />
                            <p>118.7K</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconRetweet} alt="icon Retweet" />
                            <p>785.4K</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconReact} alt="icon React" />
                            <p>3.3M</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconShare} alt="icon Share" />
                        </div>
                    </div>
                </div>
            </div>


            {/* SECTION 5 */}

            <div className="tweet">
                <img className="tweet-avatar" src={logoTweeter} alt="logo de tweeter" />
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">
                            <p>Twitter</p>
                            <img src={iconVerified} alt="icon Verified" />
                            <p>@Twitter</p>
                            <p>.  Oct 4</p>
                        </div>
                        <p className="tweet-text">hello literally everyone</p>
                        <img className="tweet-image" src={imagePlante} alt="image central de la plante" />
                    </div>

                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={iconReply} alt="icon Reply" />
                            
                            <p>118.7K</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconRetweet} alt="icon Retweet" />
                            <p>785.4K</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconReact} alt="icon React" />
                            <p>3.3M</p>
                        </div>
                        <div className="tweet-action">
                            <img src={iconShare} alt="icon Share" />
                        </div>
                    </div>
                    
                </div>

              
            </div>

        </div>
    );
}

export default Tweets;