
import iconTimelinePro from "../assets/Icons/Timeline-Prop.png"


function Header() {

    return (
        <div className="header">
            <h1 className="page-title">Home</h1>
            <img className="top-tweets" src={iconTimelinePro} alt="header"/>
        </div>
    );
}

export default Header;