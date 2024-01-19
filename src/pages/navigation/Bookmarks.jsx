import { Outlet, NavLink} from "react-router-dom";


function Bookmarks() {
    return (
        <div>
            <h1>Bookmarks</h1>
            <Outlet/>
        </div>
    );
}

export default Bookmarks;