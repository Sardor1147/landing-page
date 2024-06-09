import { Link, NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import "./about.scss"
import logo from "../../Assets/images/logo.png"
import boss from "../../Assets/images/boss.png"
import face from "../../Assets/images/face.png"
import yutub from "../../Assets/images/yutub.png"
import twiter from "../../Assets/images/twiter.png"
import google from "../../Assets/images/google.png"
import img from "../../Assets/images/Group42.png"
import stat from "../../Assets/images/Group227.png"
import img1 from "../../Assets/images/Group43.png"
import img11 from "../../Assets/images/Group41.png"
import photo from "../../Assets/images/Group268.png"
import map from "../../Assets/images/map.png"

export default function About() {
    return(
        <div className="container">
            <div className="about__header">
            <Header/>
            </div>
            <br />
            <span style={{color:'#C4C4C4', marginLeft:60}}>
                    <Link to={"/"} className="hover">Bosh sahifa</Link>&#8594;<Link to={"/about"} className="hover">Biz haqimizda</Link>
                </span>
                <div className="about__tog">
                    <div className="about__head">
                        Najot ta'lim
                    </div>
                    <div className="about__togl">
                    <Link to={"/about"}>
                        <span className="about__r">Biz haqimizda</span>
                    </Link>
                    <Link to={"/team"}>
                        <span className="about__t">Bizning Jamoa</span>
                    </Link>
                    </div>
                </div>
                <div className="about__list">
                    <div className="about__item">
                        <div className="about__flex">
                        <img src={logo} alt="" className="about__logo"/>
                        <div className="about__head1">
                        <br /> Hammasi 2018-yildan <br /> boshlangan
                        </div>
                        </div>
                        <p className="about__txt">
                        2018-yil 1-oktabr Najot Ta’limga asos solingan kun. Dastlab markazimiz o'z faoliyatini boshlaganida kurslarda guruhlar toʻlishi uch oylab kutilgan davrlar ham bo'lgan edi. Bugun esa guruhlar soni bir necha barobar ortib, ikkinchi filial ham ish boshladi.

Quvonarlisi, markazimiz bitiruvchilari yurtimizning turli xil tashkilotlarida, IT korxonalarda oʻz oʻrnini topdi.

Maqsadimiz, bir necha yillardan soʻng ham bosib oʻtilgan yoʻlning qiymati va qimmati qalblarimizni faqat va faqat faxr va shukronaga toʻldirsin!
                        </p>
                    </div>
                    <div className="about__item">
                        <div className="about__flex">
                        <img src={boss} alt="" className="about__boss"/>
                        <div className="about__head11">
                        <br /> Temurbek <br /> Adhamov
                        </div>
                        </div>
                        <p className="about__txt1">
                        2018-yil 1-oktabr Najot Ta’limga asos solingan kun. Dastlab markazimiz o'z faoliyatini boshlaganida kurslarda guruhlar toʻlishi uch oylab kutilgan davrlar ham bo'lgan edi. Bugun esa guruhlar soni bir necha barobar ortib, ikkinchi filial ham ish boshladi.

Quvonarlisi, markazimiz bitiruvchilari yurtimizning turli xil tashkilotlarida, IT korxonalarda oʻz oʻrnini topdi.

Maqsadimiz, bir necha yillardan soʻng ham bosib oʻtilgan yoʻlning qiymati va qimmati qalblarimizni faqat va faqat faxr va shukronaga toʻldirsin!
                        </p>
                        <span className="about__span">
                        Ijtimoiy tarmoqlar
                        </span>
                        <div className="about__room">
                            <a href="google.com">
                            <img src={google} alt="" className="about__link" />
                            </a>
                            <a href="facebook.com">
                            <img src={face} alt="" className="about__link" />
                            </a>
                            <a href="twitter.com">
                            <img src={twiter} alt="" className="about__link" />
                            </a>
                            <a href="youtube.com">
                            <img src={yutub} alt="" className="about__link" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about__head2">
                Maqsadimiz yuqori
                </div>
                <ul className="about__lis">
                    <li className="about__itemm">
                        <img src={photo} className="about__itemm--img" alt="" />
                        <div className="about__itemm--head">Qiziquvchi yoshlarni topamiz</div>
                        <p className="about__itemm--txt">
                        Hozirgi kunga kelib yurtimizda IT sohasiga bo’lgan talab juda ham ortib ketdi. Sababi, IT sohasida yoshlarning diplomsiz ham o’z mustahkam o’rniga ega bo’lishi, asosiy omillardan biri. Shu sababli, biz IT sohasiga qiziqqan yoshlarni qidirib topamiz.
                        </p>
                    </li>
                    <li className="about__itemm">
                        <img src={photo} className="about__itemm--img" alt="" />
                        <div className="about__itemm--head">Qiziquvchi yoshlarni topamiz</div>
                        <p className="about__itemm--txt">
                        Hozirgi kunga kelib yurtimizda IT sohasiga bo’lgan talab juda ham ortib ketdi. Sababi, IT sohasida yoshlarning diplomsiz ham o’z mustahkam o’rniga ega bo’lishi, asosiy omillardan biri. Shu sababli, biz IT sohasiga qiziqqan yoshlarni qidirib topamiz.
                        </p>
                    </li>
                    <li className="about__itemm">
                        <img src={photo} className="about__itemm--img" alt="" />
                        <div className="about__itemm--head">Qiziquvchi yoshlarni topamiz</div>
                        <p className="about__itemm--txt">
                        Hozirgi kunga kelib yurtimizda IT sohasiga bo’lgan talab juda ham ortib ketdi. Sababi, IT sohasida yoshlarning diplomsiz ham o’z mustahkam o’rniga ega bo’lishi, asosiy omillardan biri. Shu sababli, biz IT sohasiga qiziqqan yoshlarni qidirib topamiz.
                        </p>
                    </li>
                </ul>
                <div className="about__head2">
                Raqamlar statistikasida
                </div>
                <ul className="about__lis">
                    <li className="about__itemm">
                        <div className="about__a">
                            <img src={img} alt="" />
                            Dasturlash
                        </div>
                            <div className="about__itemm--head">Talabalar</div>
                            <br />
                            <br />
                            <img src={stat} className="about__itemm--img" alt="" />
                    </li>
                    <li className="about__itemm">
                        <div className="about__a">
                            <img src={img1} alt="" />
                            Dasturlash
                        </div>
                            <div className="about__itemm--head">Bitiruvchilar</div>
                            <br />
                            <br />
                            <img src={stat} className="about__itemm--img" alt="" />
                    </li>
                    <li className="about__itemm">
                        <div className="about__a">
                            <img src={img11} alt="" />
                            Dasturlash
                        </div>
                            <div className="about__itemm--head">Ishga joylashganlar</div>
                            <br />
                            <br />
                            <img src={stat} className="about__itemm--img" alt="" />
                    </li>
                </ul>
                <div className="about__listt">
                    <div className="about__item1">
                        <div className="about__item1--h">
                        Kuchlilar bilan bo’ling!
                        </div>
                        <p className="about__item1--p">
                        Bizda o’z sohasining mutaxassislari faoliyat olib borishadi. Sizni o’z safimizda ko’rishdan mamnun bo’lamiz.
                        </p>
                        <button className="about__btn">
                        Hamkorlik qiling &#8594;
                        </button>
                    </div>
                    <div className="about__item2">
                        <div className="about__head2">
                        Aloqa markazi
                        </div>
                        <div className="about__txt2">
                        O’zingizni qiziqtirgan <br /> savollarga javob oling!
                        </div>
                        <br />
                        <br />
                        <br />
                        <span className="about__num">
                        +998 (99) 828-00-11
                        </span>
                        
                        <div className="about__v">
                        08:00 dan 20:00 gacha
                        </div>
                        <button className="about__button">
                        Qo’ng’iroq qiling
                        </button>
                    </div>
                </div>
                <div className="about__listt">
                    <div className="about__listt--item">
                        <div className="about__head3">
                        Biz bilan bog’laning
                        </div>
                        <hr />
                        <div className="about__number"> <br />
                        +998 (71) 123-45-67
                        </div>
                        <hr />
                        <div className="about__time"> <br />
                        08:00 dan 20:00 gacha
                        </div>
                        <hr />
                        <div className="about__email"> <br />
                        najot-talim@gmail.com
                        </div>
                        <hr />
                        <div className="about__social">
                        Ijtimoiy tarmoqlar
                        </div>
                        <div className="about__room">
                            <a href="google.com">
                            <img src={google} alt="" className="about__link" />
                            </a>
                            <a href="facebook.com">
                            <img src={face} alt="" className="about__link" />
                            </a>
                            <a href="youtube.com">
                            <img src={yutub} alt="" className="about__link" />
                            </a>
                            <a href="twitter.com">
                            <img src={twiter} alt="" className="about__link" />
                            </a>
                        </div>
                        <button className="about__btn1">
                        Istalgan paytda bog’laning
                        </button>
                    </div>
                    <img src={map} alt="" className="about__listt--item about__f"/>
                </div>
                <div className="about__ll">
                    <div className="about__2">
                        <div className="about__2--head">
                        Toshkent shahar, <br /> Xadra filiali
                        </div>
                        <br />  
                        <div className="about__2--p">
                        +998 (71) 123-45-67 <br />
                        08:00 dan 20:00 gacha
<br /> <br />
                        najot-talim@gmail.com <br />
                        Ijtimoiy tarmoqlar:
<br /><br />
                        t.me/najot_talim
                        </div>
                        <button className="about__2--btn">
                        Istalgan paytda bog’laning
                        </button>
                    </div>
                    <div className="about__2 about__g">
                        <div className="about__2--head">
                        Toshkent shahar, <br /> Xadra filiali
                        </div>
                        <br />  
                        <div className="about__2--p">
                        +998 (71) 123-45-67 <br />
                        08:00 dan 20:00 gacha
<br /> <br />
                        najot-talim@gmail.com <br />
                        Ijtimoiy tarmoqlar:
<br /><br />
                        t.me/najot_talim
                        </div>
                        <button className="about__2--btn">
                        Istalgan paytda bog’laning
                        </button>
                    </div>
                    <div className="about__2 about__h">
                        <div className="about__2--head">
                        Toshkent shahar, <br /> Xadra filiali
                        </div>
                        <br />  
                        <div className="about__2--p">
                        +998 (71) 123-45-67 <br />
                        08:00 dan 20:00 gacha
<br /> <br />
                        najot-talim@gmail.com <br />
                        Ijtimoiy tarmoqlar:
<br /><br />
                        t.me/najot_talim
                        </div>
                        <button className="about__2--btn">
                        Istalgan paytda bog’laning
                        </button>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}