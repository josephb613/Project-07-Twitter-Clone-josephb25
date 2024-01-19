import iconReply from "../assets/IconSVG/Reply.svg"
import iconRetweet from "../assets/IconSVG/Retweet.svg"
import iconReact from "../assets/IconSVG/React.svg"
import iconShare from "../assets/IconSVG/Share.svg"

export default function TweetActions() {
    return (
        <>
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
           
        </>
    );
}

;