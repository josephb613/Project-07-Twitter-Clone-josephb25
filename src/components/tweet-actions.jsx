import iconReply from "../assets/IconSVG/Reply.svg"
import iconRetweet from "../assets/IconSVG/Retweet.svg"
import iconReact from "../assets/IconSVG/React.svg"
import iconShare from "../assets/IconSVG/Share.svg"

export default function TweetActions() {

    return (
        <>
            <div className="flex gap-20 mt-4">

                <div className="flex gap-3">
                    <button> <img src={iconReply} alt="icon Reply" /></button>
                   
                    <p>118.7K</p>
                </div>
                <div className="flex gap-3">
                    <button>    <img src={iconRetweet} alt="icon Retweet" /></button>
                
                    <p>785.4K</p>
                </div>
                <div className="flex gap-3">
                    <button>      <img src={iconReact} alt="icon React" /></button>
              
                    <p>3.3M</p>
                </div>
                <div className="flex gap-3">
                    <img src={iconShare} alt="icon Share" />
                </div>

            </div>
           
        </>
    );
}

