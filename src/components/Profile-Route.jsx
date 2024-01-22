// import { NavLink } from "react-router-dom";
// import react, { useState } from 'react';
// import Carousel from "./carousel";

// export default function ProfileRoute() {

//     return (
//         <>
//             <ul className="ProfileRoute">
//                 <NavLink to="/Posts" className="activelink">
//                     <li>Posts</li>
//                 </NavLink >
//                 <NavLink to="/Replies" className="activelink">
//                     <li>Replies</li>
//                 </NavLink >
//                 <NavLink to="/Highlights" className="activelink">
//                     <li>Highlights</li>
//                 </NavLink >
//                 <NavLink to="/Media" className="activelink">
//                     <li>Media</li>
//                 </NavLink >
//                 <NavLink to="/Likes" className="activelink">
//                     <li>Likes</li>
//                 </NavLink>
//             </ul> 

//             <Carousel />
//         </>
//     );
// }


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from './carousel';

export default function ProfileRoute() {
    const [activeLink, setActiveLink] = useState('');

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <ul className="ProfileRoute">
                <NavLink
                    to="/Posts"
                    className={activeLink === 'Posts' ? 'activelink active' : 'activelink'}
                    onClick={() => handleNavLinkClick('Posts')}
                >
                    <li>Posts</li>
                </NavLink>
                <NavLink
                    to="/Replies"
                    className={activeLink === 'Replies' ? 'activelink active' : 'activelink'}
                    onClick={() => handleNavLinkClick('Replies')}
                >
                    <li>Replies</li>
                </NavLink>
                <NavLink
                    to="/Highlights"
                    className={activeLink === 'Highlights' ? 'activelink active' : 'activelink'}
                    onClick={() => handleNavLinkClick('Highlights')}
                >
                    <li>Highlights</li>
                </NavLink>
                <NavLink
                    to="/Media"
                    className={activeLink === 'Media' ? 'activelink active' : 'activelink'}
                    onClick={() => handleNavLinkClick('Media')}
                >
                    <li>Media</li>
                </NavLink>


                <NavLink to="/Likes"
                    className={activeLink === 'Likes' ? 'activelink active' : 'activelink'}
                    onClick={() => handleNavLinkClick('Likes')}
                >
                    <li>Likes</li>
                </NavLink>


            </ul>

            <Carousel />
        </>
    );
}
