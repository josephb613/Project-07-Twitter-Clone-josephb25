import iconVector from "../assets/Icons/Vector.png"
import FTrendsFollow from "./footer-trends-follow";
import TrendFollow from "./trend-follow";
import TrendListe from "./trend-liste"



function Trends() {
    return (
        <div className="trends">

            <div className="input-container">
                <button className="icon"><img src={iconVector} alt="icone de recherche" /></button>
                <input className="camp-input" type="text" placeholder="Search Twitter" />
            </div>
            
            <TrendListe />
            <TrendFollow/>
            <FTrendsFollow/>
        </div>
    );
}

export default Trends;
