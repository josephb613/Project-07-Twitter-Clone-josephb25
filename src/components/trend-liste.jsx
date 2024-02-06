import { Link } from "react-router-dom"
import iconSettings from "../assets/Icons/Settings.png"
import iconMore from "../assets/Icons/More-2.png"

export default function TrendListe() {
    return (
        <>
            <div className="rounded-xl colors ">

                <ul className="flex flex-col gap-2 p-4">

                    <li className="flex gap-[48%] mb-1 " >
                        <h4>Trands for you</h4>
                        <img src={iconSettings} alt="" />
                    </li>

                    <li className="flex gap-28" >
                        <div>
                            <p className="whitespace-nowrap text-gray-600 ">Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p className="text-gray-600">2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </li>

                    <li className="flex gap-28" >
                        <div>
                            <p className="whitespace-nowrap text-gray-600 ">Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p className="text-gray-600">2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </li>

                    <li className="flex gap-28" >
                        <div>
                            <p className="whitespace-nowrap text-gray-600">Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p className="text-gray-600">2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </li>

                    <li className="flex gap-28" >
                        <div>
                            <p className="whitespace-nowrap text-gray-600">Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p className="text-gray-600">2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </li>
                    <Link to={`/voire plus`}>
                        <p className="btn-show">Show more</p>
                    </Link>
                </ul>
            </div>
        </>
    );
}

