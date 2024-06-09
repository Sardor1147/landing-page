import "./Header.scss"
import logo from "../../Assets/images/Logo.svg"
import { Link } from "react-router-dom"
export default function Header() {
    return(
        <div className="header">
            <Link to={"/"}>
            <img src={logo} alt="N.T" />
            </Link>
            <ul className="header__list">
                <li className="header__item a">
                    <Link to={"/about"}>
                    <a href="#" className="header__link">Biz haqimizda</a></Link>
                </li>
                <li className="header__item a">
                    <Link to={"/blog"}>
                    <a href="#" className="header__link">Blog</a>
                    </Link>
                </li>
                <li className="header__item">
                    <Link to={"/sign-up"}>
                    <button className="header__btn">Kirish</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}