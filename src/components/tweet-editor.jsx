
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
    <div className="flex items-start justify-start gap-[21px] px-4 py-[0.3rem] border-b-[#2F3336] border-b border-solid;
}">
      <Link to="/profile">
        <img className="avatar" src={imageProfilePhoto} alt="image header" />
      </Link>

      <div className="tweet-editor-form">
        <input className="tweet-editor-input" type="text" placeholder="What's happening?" />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
         
              <img src={iconMedia} alt="icon Media" />
         
           
              <img src={iconGif} alt="icon Gif" />
        
            
              <img src={iconPoll} alt="icon Poll" />
      
          
              <img src={IconEmoji} alt="Icon Emoji" />
            
           
              <img src={IconSchedule} alt="Icon Schedule" />
           
          </div>

          <button
            className={`button ${activeButton ? 'active' : ''}`}
            onClick={handleButtonClick}>
            tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;


