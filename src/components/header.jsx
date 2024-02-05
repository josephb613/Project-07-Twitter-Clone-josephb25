
import iconTimeline from "../assets/IconSVG/Timeline-Prop.svg"


export default function Header() {

    return (
        <div className="flex items-center justify-between px-4 py-6 border-b-[#2F3336] border-b border-solid;">
            <h1 className="text-2xl ">home</h1>
            <img className="tw-6 h-auto;" src={iconTimeline} alt="header" />

        </div>
    );
}
