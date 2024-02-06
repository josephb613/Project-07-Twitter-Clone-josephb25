// tweetsData.js
import mesImages from "../assets/images/Nework-times.png"
import ImageCnn from "../assets/images/tweet-profile-photo-cnn.png"
import imagePlante from "../assets/images/tweet-image.png"

const tweetsData = [
    {
        username: 'CNN',
        avatar: ImageCnn,
        verified: true,
        handle: '@CNN',
        timestamp: '7m',
        text: 'President Joe Biden touted a new agreement reached with the European Union...',
        actions: {
            replyCount: 118.7,
            retweetCount: 785.4,
            reactCount: 3.3,
        },
    },
    {
        username: 'The New York Times',
        avatar: mesImages,
        verified: true,
        handle: '@nytimes',
        timestamp: '2h',
        text: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them...',
        image: imagePlante,
        actions: {
            replyCount: 118.7,
            retweetCount: 785.4,
            reactCount: 3.3,
        },
    },
    // Add more tweets as needed
];

export default tweetsData;
