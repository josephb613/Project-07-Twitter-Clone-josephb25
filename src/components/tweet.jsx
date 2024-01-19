
import React from 'react';
import { Link } from 'react-router-dom';

const Tweet = ({ user, avatar, verified, username, timestamp, text }) => (
    <div className="tweet">
        <Link to={`/${username}`}>
            <img className="tweet-avatar" src={avatar} alt={`avatar de ${user}`} />
        </Link>

        <div className="tweet-content">
            <div className="tweet-body">
                <div className="tweet-title">
                    <p>{user}</p>
                    {verified && <img src={iconVerified} alt="icon Verified" />}
                    <p>{username}</p>
                    <p>. {timestamp}</p>
                </div>
                <p className="tweet-text">{text}</p>
            </div>
        </div>
    </div>
);

export default Tweet;