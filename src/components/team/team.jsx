import Header from "../Header/Header"
import Footer from "../footer/footer"
import "./team.scss"
import { Link } from "react-router-dom"

import teacher from "../../Assets/images/teacher.png";

export default function Team() {
    return(
        <div className="container">
            <div className="about__header">
            <Header/>
            </div>
            <br />
            <span style={{color:'#C4C4C4', marginLeft:60}}>
                    <Link to={"/"} className="hover">Bosh sahifa</Link>&#8594;<Link to={"/kurs/online/dasturlash/foundation"} className="hover">Biz haqimizda</Link>
                </span>
                <div className="about__tog">
                    <div className="about__head">
                        Najot ta'lim
                    </div>
                    <div className="about__togl">
                    <Link to={"/about"}>
                        <span className="team__1">Biz haqimizda</span>
                    </Link>
                    <Link to={"/team"}>
                        <span className="team__2">Bizning Jamoa</span>
                    </Link>
                    </div>
                </div>
                <ul className="team__list">
                    <li className="team__item p">
                        <img src={teacher} alt="teacher" />
                        <div className="team__head"> <br /> 
                        Muhammadxon <br />Najimov
                        </div>
                    </li>
                    <li className="team__item team__o">
                        <img src={teacher} alt="teacher" />
                        <div className="team__head"> <br /> 
                        Muhammadjavohir  Sur'atov
                        </div>
                    </li>
                    <li className="team__item team__i">
                        <img src={teacher} alt="teacher" />
                        <div className="team__head"> <br /> 
                        Saud <br />Abdulwahed
                        </div>
                    </li>
                    <li className="team__item team__l">
                        <img src={teacher} alt="teacher" />
                        <div className="team__head"> <br /> 
                        Muhammadxon <br />Najimov
                        </div>
                    </li>
                    <li className="team__item team__k">
                        <img src={teacher} alt="teacher" />
                        <div className="team__head"> <br /> 
                        Muhammadxon <br />Najimov
                        </div>
                    </li>
                    <li className="team__item team__j">
                        <img src={teacher} alt="teacher" />
                        <div className="team__head"> <br /> 
                        Muhammadxon <br />Najimov
                        </div>
                    </li>
                </ul>
            <Footer/>
        </div>
    )
}