import "./Hero.scss"
import ".././part/part.scss"
import { Link } from "react-router-dom"

import img from "../../Assets/images/Group42.png"
import img1 from "../../Assets/images/Group43.png"
import img11 from "../../Assets/images/Group41.png"
import img2 from "../../Assets/images/Group46.png"
import img22 from "../../Assets/images/Group31.png"

export default function Hero(){
    return(
        <div className="hero">
            <div className="hero__part">
            <h4 className="hero__head"><br /> <br /> Kategoriyalar bo'yicha tanlangan mavzular</h4>
            <ul className="hero__list">
                <li className="hero__item--head">
                    <img src={img} alt="" className="hero__img" /> Dasturlash
                </li>
                <li className="hero__item--head">
                    <img src={img1} alt="" className="hero__img" /> Dizayn
                </li>
                <li className="hero__item--head">
                    <img src={img11} alt="" className="hero__img" /> Marketing
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Python</span> 
                    <br />
                    Boshlanish vaqti: 30.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Brending</span> 
                    <br />
                    Boshlanish vaqti: 28.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Raqamli Marketing</span> 
                    <br />
                    Boshlanish vaqti: 27.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Bootcamp</span> 
                    <br />
                    Boshlanish vaqti: 21.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Grafik dizayn</span> 
                    <br />
                    Boshlanish vaqti: 27.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">SMM Pro</span> 
                    <br />
                    Boshlanish vaqti: 27.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Foundation</span> 
                    <br />
                    Boshlanish vaqti: 27.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Bootcamp UX/UI Dizayn</span> 
                    <br />
                    Boshlanish vaqti: 27.09.2021
                </li>
                <li className="hero__item">
                    <span className="hero__spans">Targeting</span> 
                    <br />
                    Boshlanish vaqti: 27.09.2021
                </li>
            </ul>
            <Link to={"/kurs/online/dasturlash"}>
                        <span className="hero__link">Barcha Kurslarni ko'rish &#8594;</span>
                        </Link>
            </div>
            <div className="hero__part2">
                <div className="hero__part2--cont">
                    <img src={img2} alt="" className="hero__ser"/>
                    <h4 className="hero__head2"><br /> <br /> Sertifikatlar</h4>
                    <p className="hero__txt">
                    Barcha yo’nalishlarda kursni tugatganlik haqida tasdiqlovchi sertifikatlar <br /> topshiriladi. 
                    </p>
                    <Link to={"/kurs/online/dasturlash"}>
                        <span className="part__span">Kurslarni tanlash &#8594;</span>
                        </Link>
                </div>
                <img src={img22}  alt="" style={{marginLeft:"auto"}}/>
            </div>
        </div>
    )
}