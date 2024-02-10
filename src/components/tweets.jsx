
import { Link } from 'react-router-dom';

import iconVerified from "../assets/Icons/Verified.png";
// import TweetActions from './tweet-actions';
import MoreIcon from './btn/moreIcon';
import tweetsData from '../data/tweets.json';


export default function Tweets() {


    return (
        <div>

            {tweetsData.map(tweet => (


                <div className=" flex border-b-2 border-borderColor gap-6 p-4 " key={tweet.id}>

                    <Link>
                        <div className='w-10'>
                            <img src={tweet.avatar} alt="" />
                        </div>
                    </Link>

                    <div className='w-full'>
                        <div className='flex flex-col gap-1 mb-1 '>
                            <div className='flex gap-1 mb-1'>
                                <p>{tweet.username}</p>
                                <img src={iconVerified} className='' alt="icon Verified" />
                                <p className='text-Textcolors font-thin'>{tweet.handle}</p>
                                <p className='text-Textcolors font-thin'>.{tweet.time}</p>
                            </div>
                            <p className="">{tweet.text}</p>
                            <div >
                                <img src={tweet.image} alt="" className='rounded-3xl' />
                            </div>
                        </div>


                        <div className="-ml-32 mb-5 mt-4">
                            {/* <TweetActions /> */}
                        </div>
                    </div>

                    <div className='p-1'>
                        <div>
                            <MoreIcon />
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}
