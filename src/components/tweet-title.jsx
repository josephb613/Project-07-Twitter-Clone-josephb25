import iconVerified from "../assets/Icons/Verified.png"

export default function TweetTitle () {
    return (
        <>
            <div className="tweet-title">
                <p>CNN</p>
                <img src={iconVerified} alt="icon Verified" />
                <p>@CNN</p>
                <p>. 7m</p>
            </div>
        </>
    );
}

