
import { Outlet } from "react-router-dom";
import Trends from "./trends";
import Sidebar from "./sidebar";


export default function Layout() {
    return (
        <>
            <div className="left-sidebar">
                <Sidebar />
            </div>

            <Outlet />

            <div className="right-sidebar">

                <Trends />


            </div>
        </>
    );
}
