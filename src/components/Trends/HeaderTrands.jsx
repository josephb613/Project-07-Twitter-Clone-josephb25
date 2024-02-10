import React from 'react';
import jsonData from "../../data/trendData.json";


function FollowForYou({ title, icon, navlink, navlinkText }) {
    return (
        <div>
            <img src={icon} alt={title} />
            <a href={navlink}>{navlinkText}</a>
        </div>
    );
}


function Trend({ location, hashtag, tweets }) {
    return (
        <div>
            <p>Location: {location}</p>
            <p>Hashtag: {hashtag}</p>
            <p>Tweets: {tweets}</p>
        </div>
    );
}

export default function HeaderTrends() {
    return (
        <div>
            {jsonData.items.map((item, index) => (
                <div key={index}>
                    {item.title ? (
                        <FollowForYou
                            title={item.title}
                            icon={item.icon}
                            navlink={item.navlink}
                            navlinkText={item.navlinkText}
                        />
                    ) : (
                        <Trend
                            location={item.location}
                            hashtag={item.hashtag}
                            tweets={item.tweets}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
