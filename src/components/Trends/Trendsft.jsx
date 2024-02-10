import { NavLink } from "react-router-dom";

export default function Trendsft() {
    const links = [
        { e: "Terms of Service", to: "/terms-of-service" },
        { e: "Privacy Policy", to: "/privacy-policy" },
        { e: "Imprint", to: "/imprint" },
        { e: "Cookie Policy", to: "/cookie-policy" },
        { e: "Ads info", to: "/ads-info" },
        { e: "More ...", to: "/more" },
        { e: "© 2021 Twitter, Inc.", to: "/twitter-inc" }
    ];
    return (
        <div>
            <ul className="text-xs text-Textcolors  border w-[95%] h-20 ml-2 p-1">
                <li className="flex gap-1">
                    {links.map((link, id) => (
                        <NavLink key={id} to={link.to}>
                            <li>{link.e}</li>
                        </NavLink>
                    ))}

                </li>
            </ul>
        </div>
    );
}
