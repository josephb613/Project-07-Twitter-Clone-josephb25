import React, { createContext, useContext, useState } from 'react';

const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
    const [tweets, setTweets] = useState([]);

    const addTweet = (tweet) => {
        setTweets([...tweets, tweet]);
    };

    return (
        <TweetContext.Provider value={{ tweets, addTweet }}>
            {children}
        </TweetContext.Provider>
    );
};

export const useTweetContext = () => {
    return useContext(TweetContext);
};
