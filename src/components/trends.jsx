import iconVector from "../assets/Icons/Vector.png"
import FTrendsFollow from "./footer-trends-follow";
import TrendFollow from "./trend-follow";
import TrendListe from "./trend-liste"



function Trends() {
    return (
        <div className="trends">
            <button className="btn-trends">
                <img className="img-icon" src={iconVector} alt="icone de recherche" />
                <input className="camp-input" type="text" placeholder="Search Twitter" />
            </button>
            <TrendListe />
            <TrendFollow />
            <FTrendsFollow />
        </div>
    );
}

export default Trends;
