
import React, { useState } from "react";
import { Link } from "react-router-dom";
import imageProfilePhoto from "../assets/images/profile-photo.png";
import iconMedia from "../assets/Icons/Media.png";
import iconGif from "../assets/Icons/Gif.png";
import iconPoll from "../assets/Icons/Poll.png";
import IconEmoji from "../assets/Icons/Emoji.png";
import IconSchedule from "../assets/Icons/Schedule.png";

function TweetEditor() {
  const [activeButton, setActiveButton] = useState(false);

  const handleButtonClick = () => {
    setActiveButton(!activeButton);
  };

  return (
    <div className="tweet-editor">
      <Link to={`/<username>`}>
        <img className="avatar" src={imageProfilePhoto} alt="image header" />
      </Link>

      <div className="tweet-editor-form">
        <p className="tweet-editor-input">What's happening?</p>

        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <Link to={`/icon Media}`}>
              <img src={iconMedia} alt="icon Media" />
            </Link>
            <Link to={`/icon Gif}`}>
              <img src={iconGif} alt="icon Gif" />
            </Link>
            <Link to={`/icon Poll}`}>
              <img src={iconPoll} alt="icon Poll" />
            </Link>
            <Link to={`/Icon Emoji}`}>
              <img src={IconEmoji} alt="Icon Emoji" />
            </Link>
            <Link to={`/IconSchedule}`}>
              <img src={IconSchedule} alt="Icon Schedule" />
            </Link>
          </div>

          <button
            className={`button ${activeButton ? 'active' : ''}`}
            onClick={handleButtonClick}
          >
            tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;


