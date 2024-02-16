import icon from "../../assets/IconSVG/Verified.svg"
import icontwitter from "../../assets/IconSVG/TWIT.svg"
import imageNYT from "../../assets/images/Nework-times.png"
import imageCNN from "../../assets/IconSVG/CNN.svg"
import imagNYT from "../../assets/IconSVG/NYT.svg"
import MoreIcon from "../btn/moreIcon"
import BtnShow from "../btn/btnShow"


export default function TrendsSection2() {
  const Title = "who to follow"

  return (
    <div className="flex flex-col gap-2 mt-[25%] bg-primary p-2 rounded-xl">

      <p className="mb-5  mt-3 ml-4  font-extrabold ">{Title}</p>

      <div className="flex ml-2  gap-5">
        <div className="flex  gap-2">
          <img src={imageNYT} alt="" className="w-8 h-8" />
          <div>
            <div className="flex">
              <p className="w-44">The new york times</p>
              <img src={icon} alt="" className="w-4 -ml-3" />
            </div>
            <p className=" -mt-1 text-sm  text-police">@nytimes</p>
          </div>
        </div>
        <button className="border bg-white text-black rounded-full w-20 h-9 ">Follow</button>
      </div>


      <div className="flex ml-2 gap-[45%]">
        <div className="flex  gap-2">
          <img src={imageCNN} alt="" className="w-8 h-8" />
          <div className="">
            <div className="flex gap-1 items-center">
              <p>CNN</p>
              <img src={icon} alt="" className="w-4" />
            </div>
            <p className=" -mt-1 text-sm  text-police">@CNN</p>
          </div>
        </div>
        <button className="border bg-white text-black rounded-full w-20 h-9 ">Follow</button>
      </div>

      <div className="flex ml-2 gap-[45%]">
        <div className="flex  gap-2">
          <img src={icontwitter} alt="" className="w-8 h-8" />
          <div className="">
            <div className="flex gap-1 items-center">
              <p>Twitter</p>
              <img src={icon} alt="" className="w-4" />
            </div>
            <p className=" -mt-1 text-sm  text-police">@Twitter</p>
          </div>
        </div>
        <button className="border bg-white text-black rounded-full w-20 h-9 ">Follow</button>
      </div>

      <div className="ml-4">
        <BtnShow />
      </div>


    </div>
  )
}