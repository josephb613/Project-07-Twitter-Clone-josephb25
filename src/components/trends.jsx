// ** import components
import TrendsSection1 from "./Trends/TrendsSection1";
import TrendSection3 from "./Trends/TrendSection3";

import SearchBar from "./btn/SearchBar";
import TrendsSection2 from "./Trends/TrendSection2";


function Trends() {

    return (
        <div className="trends p-2 h-full w-[22%] ">

            <SearchBar />
            <TrendsSection1 />
       
            <TrendsSection2 />

            <TrendSection3 />
        </div>
    );
}

export default Trends;
