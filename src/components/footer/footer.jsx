import "./footer.scss"
import logo from "../../Assets/images/logo.png"
import telegram from "../../Assets/images/telegram.png"
import face from "../../Assets/images/face.png"
import yutub from "../../Assets/images/yutub.png"
import twiter from "../../Assets/images/twiter.png"

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer__up">
                <div className="footer__logos">
                    <img src={logo} alt="" className="footer__logo" />
                    <p className="footer__txt">
                    Saytda ishlatilgan ma’lumotlar, video kontentlar himoyalangan. Ularni yozib olish, ko'chirish, tarqatish mumkin emas, aks holda javobgarlikka tortilasiz!
                    </p>
                </div>
                <ul className="footer__list">
                    <li className="footer__item1">kurslar</li>
                    <li className="footer__item1">dasturlash</li>
                    <li className="footer__item1">dizayn</li>
                    <li className="footer__item1">marketing</li>
                    <li className="footer__item">Dizayn</li>
                    <li className="footer__item">Foundation</li>
                    <li className="footer__item">Bootcamp Grafika Dizayni</li>
                    <li className="footer__item">Raqamli Marketing</li>
                    <li className="footer__item">Dasturlash</li>
                    <li className="footer__item">Web Dasturlash</li>
                    <li className="footer__item">Bootcamp UX/UI Dizayn</li>
                    <li className="footer__item">SMM Pro</li>
                    <li className="footer__item">Marketing</li>
                    <li className="footer__item">Android Dasturlash</li>
                    <li className="footer__item">Grafika Dizayni</li>
                    <li className="footer__item">Youtube</li>
                    <li className="footer__item">Xorijiy Tillar</li>
                    <li className="footer__item">IOS Dasturlash</li>
                    <li className="footer__item">Brending</li>
                    <li className="footer__item">Targeting</li>
                </ul>
            </div>
            <hr className="footer__hr" />
            <div className="footer__down">
            <ul className="footer__list2">
                <li className="footer__down--item">
                    &#169;2021. <br />All rights reserved
                </li>
                <li className="footer__down--item">
                    <h6 className="footer__head">Toshkent shahri, Xadra maydoni, <br /> Sebzor ko'chasi</h6>
                    Mo'ljal: O'zbekiston davlat sirkining orqa <br /> tarafi, Milliy taomlar yonida.
                </li>
                <li className="footer__down--item">
                Tarmoqlar:
                <div className="footer__links">
                    <a href="#">
                        <img src={telegram} alt="" />
                    </a>
                    <a href="#">
                        <img src={face} alt="" />
                    </a>
                    <a href="#">
                        <img src={yutub} alt="" />
                    </a>
                    <a href="#">
                        <img src={twiter} alt="" />
                    </a>
                </div>
                </li>
                <li className="footer__num">
                Telefon raqam: <br /> <span className="footer__number">+998 (71) 200-11-23</span>
                </li>
            </ul>
            </div>
        </div>
    )
}