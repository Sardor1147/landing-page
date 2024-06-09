import "./widget.scss"
import { Link } from "react-router-dom"
import man from "../../Assets/images/man.png"
import logo from "../../Assets/images/Layer.png"
import girl from "../../Assets/images/Group64.png"
import m from "../../Assets/images/m.svg"
import bolalar from "../../Assets/images/bolalar.svg"
import eduaction from "../../Assets/images/Eduaction.svg"
import techjobs from "../../Assets/images/techjobs.svg"
import abutech from "../../Assets/images/abutech.svg"
import millat from "../../Assets/images/milllat.svg"
import kunuz from "../../Assets/images/kunuz.svg"
import cambridge from "../../Assets/images/cambridge.svg"
import pcg from "../../Assets/images/pcg.svg"
import dinay from "../../Assets/images/dinay.svg"
import cambridge2 from "../../Assets/images/cambridge2.svg"
import cambridge22 from "../../Assets/images/cambridge22.svg"
import fido from "../../Assets/images/fido.svg"
import logoo from "../../Assets/images/logo.png"
import team from "../../Assets/images/team.png"
import star from "../../Assets/images/star.png"

export default function Widget() {
    
    return(
        <div className="widget">
            <ul className="widget__list">
                <li className="widget__item">
                    <img src={man} alt="" className="widget__img" />
                    <h4 className="widget__head"><br /> <br /> Jasur Rashidov</h4>
                    <p className="widget__txt">
                    Yaqinda men Najot ta’limda grafik dizayner sifatida o'qishni boshladim. Men darhol ustozlarning yaxshi ishini qayd etishim mumkin. Ular barcha boshlanuvchilarga kurs uchun pul to'lashda, hujjatlar bilan...
                    </p>
                    <abbr title="EORIYYYYHEOA8UU9AHFWOEUFHA8EW" className="widget__abbr">Batafsil</abbr>
                </li>
                <li className="widget__item">
                    <img src={girl} alt="" className="widget__img" />
                    <h4 className="widget__head"><br /> <br /> Nozima Murodova</h4>
                    <p className="widget__txt">
                    Men barcha o’quv markazlar orasida Najot Ta’limni tanlaganimdan chin dildan xursandman. Uzoq vaqt qidirdim va o’ylimanki eng yaxshi jamoani topib bilim oldim. Barchaga tavsiya qilaman!
                    </p>
                    <abbr title="aeriuuuuuuuuuu" className="widget__abbr">Batafsil</abbr>
                </li>
            </ul>
            <div className="widget__partner">
                <div className="widget__left">
                    <h4 className="widget__part--head"><br /> <br /> Bizning hamkorlar</h4>
                    <p className="widget__part--txt">
                    Yodingizda tuting, biz siz bilan hamkorlik qilishdan doimo xursandmiz va sizga o‘z minnatdorchiligimizni bildiramiz!
                    </p>
                </div>
                <div className="widget__right">
                    <ul className="widget__partners">
                        <li className="widget__i">
                            <img src={logo} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={abutech} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={techjobs} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={kunuz} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={eduaction} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={bolalar} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={m} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={millat} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={cambridge} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={pcg} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={dinay} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={cambridge2} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={cambridge22} alt="" />
                        </li>
                        <li className="widget__i">
                            <img src={fido} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="widget__grad">
                <div className="widget__grad--left">
                    <ul className="widget__grad--list">
                        <li className="widget__grad--item">
                            <img className="widget__g--l" src={logoo} alt="" />
                        </li>
                        <li className="widget__grad--item">
                            <h5 className="widget__grad--head">Najot ta’lim</h5>
                        </li>
                        <li className="widget__grad--item">
                            <p className="widget__grad--head--after">Zamonaviy kasbni biz bilan o’rganing va o’z faoliyatingizni boshlang</p>
                        </li>
                        <li className="widget__grad--item">
                            <Link to={"/about"}>
                            <a href="#" className="widget__g--link">Batafsil &#8594;</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="widget__g--list">
                        <span className="widget__g--h1"><br /> +400</span> <br />
                        <span className="widget__g--h2"><br /> +800</span> <br /> 
                        <span className="widget__g--h3"><br /> +30</span> <br />
                    </div>
                </div>
                <div className="widget__grad--right">
                    <img src={team} alt="" className="widget__g--team"/>
                    {/* <span className="widget__g--s">&#8594;</span> */}
                    <div className="widget__g--flex">
                        <img src={star} alt="" className="widget__g--img"/>
                        <p className="widget__g--t">
                        Agar siz bizning oilamizga qo'shilish <br /> istagida bo‘lsangiz, bizning <br /> eshigimiz siz uchun doimo ochiq
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}