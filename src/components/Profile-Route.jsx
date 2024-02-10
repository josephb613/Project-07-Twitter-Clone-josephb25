import { NavLink } from "react-router-dom";
// import react, { useState } from 'react';



export default function ProfileRoute() {


    return (

        <>
            <ul className="ProfileRoute">
                <NavLink to="/Posts" className="activelink">
                    <li>Posts</li>
                </NavLink >
                <NavLink to="/Replies" className="activelink">
                    <li>Replies</li>
                </NavLink >
                <NavLink to="/Highlights" className="activelink">
                    <li>Highlights</li>
                </NavLink >
                <NavLink to="/Media" className="activelink">
                    <li>Media</li>
                </NavLink >
                <NavLink to="/Likes" className="activelink">
                    <li>Likes</li>
                </NavLink>
            </ul>

        </>
    );
}
