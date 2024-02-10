// ** import components
import HeaderTrands from "./Trends/HeaderTrands";
import Trendsft from "./Trends/Trendsft";
import SearchBar from "./btn/SearchBar";


function Trends() {

    return (
        <div className="trends p-1 h-full w-[22%] ">

            <SearchBar />
            <HeaderTrands />
            <Trendsft />
        </div>
    );
}

export default Trends;
