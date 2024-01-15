
import iconTimeline from "../assets/IconSVG/Timeline-Prop.svg"


export default function Header() {

    return (
        <div className="header">
            <h1 className="page-title">Home</h1>
            <img className="top-tweets" src={iconTimeline} alt="header"/>
        </div>
    );
}

