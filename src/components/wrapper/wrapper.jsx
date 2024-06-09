import "./wrapper.scss"
import {  Link } from "react-router-dom"
import mark from "../../Assets/images/Group68.png"
import comp from "../../Assets/images/illus.png"
import des from "../../Assets/images/illus(1).png"
import mark1 from "../../Assets/images/Group34.png"
export default function Wrapper() {
    return(
        <div className="wrapper">
            <ul className="kurs__list--head">
                    <Link to={"/kurs/online/dasturlash"}>
                        <li className="kurs__head--item">
                            <span className="kurs__item--head">Dasturlash <br /> <br /></span>
                            <img src={comp} alt="" className="kurs__img"/>
                        </li>
                    </Link>
                    <Link to={"/kurs/online/dizayn"}>
                        <li className="kurs__head--item">
                            <span className="kurs__item--head">Dizayn <br /> <br /></span>
                            <img src={des} alt="" className="kurs__img"/>
                        </li>
                    </Link>
                    <Link to={"/kurs/online/marketing"}>
                        <li className="kurs__head--item">
                            <span className="kurs__item--head">Marketing <br /> <br /></span>
                            <img src={mark} alt="" className="kurs__img"/>
                        </li>
                    </Link>
                    <Link to={"/kurs/online/marketing"}>
                        <li className="kurs__head--item1">
                            <span className="kurs__item--head1">Marketing kursiga <br /> 30% chegirma <br /> </span>
                            <br />
                            <img src={mark1} alt="" className="kurs__img"/>
                            <br />
                            <br />
                            <Link to={"/kurs/online/marketing"}>
                                <a href="#" className="kurs__w">Kurslarni boshlash &#8594;</a>
                            </Link>
                        </li>
                    </Link>
            </ul>
        </div>
    )
}