import { Link } from "react-router-dom"
import imageNewYorkTimes from "../assets/images/Nework-times.png"
import imageCnn from "../assets/images/tweet-profile-photo-cnn.png"
import iconVerified from "../assets/Icons/Verified.png"
import logoTweeter from "../assets/images/Logo-tweeter.png"

export default function TrendFollow() {
    return (
        <>
            <div className=" colors rounded-xl  gap-5 p-2">
                <p className="mb-4">Who to follow</p>


                <div className="flex  gap-3 items-center  justify-center">
                    <img src={imageNewYorkTimes} alt="" className="w-10 h-10" />
                    <div>
                        <div className="trends-icon">
                            <p className="whitespace-nowrap li ">The New York Times</p>
                            <img src={iconVerified} alt="icon Verified" className=" ml-2 w-4 h-4" />
                        </div>
                        <p className="text-gray-600">@nytimes</p>
                    </div>
                    <button type="submit" className=" ml-5  bg-white text-black rounded-full w-[30%] p-1" >Follow</button>
                </div>

                <div className="flex gap-3 items-center  justify-center">
                    <img src={imageCnn} alt="" className="w-10 h-10" />
                    <div>
                        <div className="trends-icon">
                            <p className="whitespace-nowrap w-[70%] li">@CNN </p>
                            <img src={iconVerified} alt="icon Verified" className=" ml-2 w-4 h-4" />
                        </div>
                        <p className="text-gray-600">@CNN</p>
                    </div>
                    <button type="submit" className=" ml-5  bg-white text-black rounded-full w-[30%] p-1" >Follow</button>
                </div>


                <div className="flex  gap-3 items-center  justify-center">
                    <img src={logoTweeter} alt="" className="w-10 h-10" />
                    <div>
                        <div className="trends-icon">
                            <p className="whitespace-nowrap li ">Twitter</p>
                            <img src={iconVerified} alt="icon Verified" className=" ml-2 w-4 h-4" />
                        </div>
                        <p className="text-gray-600">@Twitter</p>
                    </div>
                    <button type="submit" className=" ml-5  bg-white text-black rounded-full w-[30%] p-1" >Follow</button>
                </div>



                <Link to={`/voire plus`}>
                    <p className="btn-show">Show more</p>
                </Link>
            </div>
        </>
    );
}

