import "./course.scss"
import {  NavLink } from "react-router-dom"
import lupa from "../../Assets/images/lupa.svg"

export default function Course() {
    return(
        <div className="container">
           
            <ul className="kurs__list">
                <li className="kurs__head">
                Barcha o’quv kurslar 
                </li>
                <li className="kurs__tog">
                    <NavLink to={"/kurs/online/dasturlash"} className={""}><div className="kurs__l">Online</div></NavLink>
                    <NavLink to={"/kurs/offline"} className={""}><div className="kurs__l">Offline</div></NavLink>
                </li>
                <li className="kurs__search">
                    <img src={lupa} alt="" />
                    <input type="text" placeholder="Search" className="kurs__inp" />
                </li>
            </ul>
        </div>
    )
}