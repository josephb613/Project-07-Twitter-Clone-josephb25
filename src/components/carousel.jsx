import carousel1 from "../assets/carousel-img/1.webp"
import carousel2 from "../assets/carousel-img/2.webp"
import carousel3 from "../assets/carousel-img/3.webp"
import carousel4 from "../assets/carousel-img/4.webp"
import carousel5 from "../assets/carousel-img/5.webp"



export default function Carousel() {
    return (
        <div>
            <ul>
                <li><img src={carousel1} alt="" /></li>
                <li><img src={carousel2} alt="" /></li>
                <li><img src={carousel3} alt="" /></li>
                <li><img src={carousel4} alt="" /></li>
                <li><img src={carousel5} alt="" /></li>
            </ul>
        </div>
    );
}

