import { Link } from "react-router-dom"
import iconSettings from "../assets/Icons/Settings.png"
import iconMore from "../assets/Icons/More-2.png"

export default function TrendListe() {
    return (
        <>
            <div className="trends-list">
                <div className="trends-content">

                    <div className="position" >
                        <h4>Trands for you</h4>
                        <img src={iconSettings} alt="" />
                    </div>
                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>

                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>

                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>

                    <div className="position" >
                        <div>
                            <p>Trends in turkey</p>
                            <h5>#SQUID</h5>
                            <p>2,066 Twees</p>
                        </div>
                        <div>
                            <img src={iconMore} alt="" />
                        </div>
                    </div>
                    <Link to={`/voire plus`}>
                        <p className="btn-show">Show more</p>
                    </Link>
                </div>
            </div>   
        </>
    );
}

