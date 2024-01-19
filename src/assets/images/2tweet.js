
import { Link } from "react-router-dom";


function tweet({ avatar, username, verified, time, text, image }) {
    return (
        <div classname="tweet">
            <Link to={`/${username}`}>
                <img classname="tweet-avatar" src={avatar} alt={`avatar de ${username}`} />
            </Link>

            <div classname="tweet-content">
                <div classname="tweet-body">
                    <div classname="tweet-title">
                        <tweettitle username={username} verified={verified} time={time} />
                    </div>
                    <p classname="tweet-text">{text}</p>
                    {image && <img classname="tweet-image" src={image} alt="image du tweet" />}
                    <tweetactions />
                </div>
            </div>


        </div>
    );
}