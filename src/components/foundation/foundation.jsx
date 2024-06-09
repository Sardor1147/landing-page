import Header from "../Header/Header"
import "./foundation.scss"
import gift  from "../../Assets/images/Group142.svg"
import img from "../../Assets/images/Ellipse24.png"
import img2 from "../../Assets/images/Group46.png"
import b from "../../Assets/images/Laptop.png"
import www from "../../Assets/images/www.png"
import frame from "../../Assets/images/Frame.png"
import tick from "../../Assets/images/tick.svg"
import img22 from "../../Assets/images/Group31.png"

import { Link } from "react-router-dom"
import Footer from "../footer/footer"
import photo from "../../Assets/images/Group145.svg"
import { hover } from "@testing-library/user-event/dist/hover"
export default function Foundation() {
    return(
        <div className="found">
            <div className="code__head">
                <Header/>
            </div>
            <br />
                <span style={{color:'#C4C4C4', marginLeft:60}}>
                    <Link to={"/"}>Bosh sahifa</Link>&#8594;<Link to={"/kurs/online/dasturlash"}>Kurslar</Link>&#8594;<Link to={"/kurs/online/dasturlash/foundation"}>Foundation</Link>
                </span>
                <div className="found__gift">
                    <img src={gift} alt="" className="found__img"/>
                    10-oktabrgacha kursni sotib oling va 30% chegirmaga ega bo’ling
                </div>
                <div className="found__part">
                    <div className="found__part--cont">
                        <div className="found__head">Foundation</div>
                        <p className="found__txt">
                        Foundationni oʻqish davomida oʻquvchilar dasturlash strukturasi, dasturlash mantigʻi, uning algoritmi, dastur yaratilgandan keyin uning orqa fonida qanday jarayonlar boʻlishini toʻliq anglab yetadi. Yana bir yangilik, oʻquvchilar kurs davomida bonus sifatida ingliz tilidan ham bilim olishlari taʼminlanadi.
                        </p>
                        <div className="found__teacher">
                            <img src={img} alt="" className="found__prof" /> Sulaymon Ne'matov
                        </div>
                        <div className="found__span">
                        Davomiylik: 4 oy <span style={{marginLeft:50}}>Darslar soni: 24 ta</span>
                        </div>
                    </div>
                    <img src={b} alt="" className="found__b"/>
                </div>
                <ul className="found__list1">
                    <li style={{color:"#006CD0", fontWeight:600 ,textDecoration:"underline"}}>Kurs kim uchun mo’ljallangan </li>
                    <li>Kursdan qanday bilimlarni olasiz</li>
                    <li>Kurs qanday tartibda o’tiladi</li>
                    <li>Kurs dasturi</li>
                    <li>Sertifikat</li>
                    <li>Ko‘p so‘raladigan savollar</li>
                </ul>
                <hr style={{width:1100}}/>
                <div className="found__for">Kurs kim uchun mo’ljallangan</div>
                <div className="found__flex">
                    <div className="found__flex--left">
                        <ul className="found__list11">
                            <li className="found__i">
                                <div className="found__i--flex">
                                    <img src={www} className="found__m" alt="" /> Asl dasturchi <br /> uchun
                                </div>
                                <p className="found__i--txt">
                                Bir platformadan o'ting chegaralarni buzing va bir universal dasturchiga aylaning. Ishlaydigan prototiplarni yaratishni va Flutterda loyihalarini bajarishni o'rganing. Master Dart va portfoliyangizga yangi ilovalarni qo'shing. Android va iOS uchun shaxsiy loyihalarni qayta yozing, o'z kompaniyangizda tizimni amalga oshirishni taklif qiling yoki yangi jamoaga qo'shiling.
                                </p>
                            </li>
                            <li className="found__i">
                                <div className="found__i--flex">
                                    <img src={frame} className="found__m" alt="" /> Boshqa yo'nalishdagi <br /> dasturchilar
                                </div>
                                <p className="found__i--txt">
                                Bir platformadan o'ting chegaralarni buzing va bir universal dasturchiga aylaning. Ishlaydigan prototiplarni yaratishni va Flutterda loyihalarini bajarishni o'rganing. Master Dart va portfoliyangizga yangi ilovalarni qo'shing. Android va iOS uchun shaxsiy loyihalarni qayta yozing, o'z kompaniyangizda tizimni amalga oshirishni taklif qiling yoki yangi jamoaga qo'shiling.
                                </p>
                            </li>
                        </ul>
                        <div className="found__for">Kursdan qanday bilimlarni olasiz</div>
                        <ul className="found__list2">
                            <li className="found__item2">
                                <div className="found__item2--f">
                                <img src={tick} alt="" className="found__tick" />
                                <span>Turli platformalar uchun ilovalarni ishlab chiqish</span> <br />
                                </div>
                                <p className="found__txt2">
                                Siz Android va iOS da bir xil ishlaydigan ilovalarni yaratishingiz mumkin. Har bir platforma uchun <br /> bir nechta dasturlash tillarini o'rganishingiz va ilovalarni noldan yaratishingiz shart emas.
                                </p>
                            </li>
                            <br />
                            <li className="found__item2">
                                <div className="found__item2--f">
                                <img src={tick} alt="" className="found__tick" />
                                <span>Turli platformalar uchun ilovalarni ishlab chiqish</span> <br />
                                </div>
                                <p className="found__txt2">
                                Siz Android va iOS da bir xil ishlaydigan ilovalarni yaratishingiz mumkin. Har bir platforma uchun <br /> bir nechta dasturlash tillarini o'rganishingiz va ilovalarni noldan yaratishingiz shart emas.
                                </p>
                            </li>
                            <br />
                            <li className="found__item2">
                                <div className="found__item2--f">
                                <img src={tick} alt="" className="found__tick" />
                                <span>Turli platformalar uchun ilovalarni ishlab chiqish</span> <br />
                                </div>
                                <p className="found__txt2">
                                Siz Android va iOS da bir xil ishlaydigan ilovalarni yaratishingiz mumkin. Har bir platforma uchun <br /> bir nechta dasturlash tillarini o'rganishingiz va ilovalarni noldan yaratishingiz shart emas.
                                </p>
                            </li>
                        </ul>
                        <div className="found__for">Kurs qanday tartibda o’tiladi</div>
                        <ul className="found__grid">
                            <li className="found__grid--i">
                                <div className="found__grid--flex">
                                <span className="found__num">1</span>
                                <div className="found__theme">Mavzu o’rganib chiqiladi</div>
                                </div>
                                <p className="found__grid--txt">
                                Video darslarda orqali <br /> amaliyot qilinadi.
                                </p>
                            </li>
                            <li className="found__grid--i">
                                <div className="found__grid--flex">
                                <span className="found__num">3</span>
                                <div className="found__theme">Ustoz bilan birga ishlanadi</div>
                                </div>
                                <p className="found__grid--txt">
                                Video darslarda orqali <br /> amaliyot qilinadi.
                                </p>
                            </li>
                            <li className="found__grid--i">
                                <div className="found__grid--flex">
                                <span className="found__num">2</span>
                                <div className="found__theme">Uyga vazifalar bajariladi</div>
                                </div>
                                <p className="found__grid--txt">
                                O’rgangan bilimlarni <br /> mustahkamlaysiz va xatolarni <br /> to’g’irlash
                                </p>
                            </li>
                            <li className="found__grid--i">
                                <div className="found__grid--flex">
                                <span className="found__num">4</span>
                                <div className="found__theme">Dimlop ish himoyasi</div>
                                </div>
                                <p className="found__grid--txt">
                                Qo’shimcha  portfoliongiz yana bir <br /> ishga ko’payadi
                                </p>
                            </li>
                        </ul>
                        <div className="found__for">Kurs dasturi</div>
                        <div className="found__wrap">
                            <ul className="found__z">
                                <li className="found__z--t">
                                Siz dasturlash tajribasiga ega bo'lishingiz va yuqori darajadagi tillardan birini bilishingiz kerak. Dastur onlayn ma'ruzalar va amaliy topshiriqlarga ega modullarni o'z ichiga oladi.
                                </li>
                                <li className="found__z--d"><br /> 24 ta</li>
                                <li className="found__z--o"><br /> 20 ta</li>
                            </ul>
                            <hr style={{width:660}} />
                            <ol className="found__ol">
                                <li className="found__itemm">Kirish <span className="found__plus l">x</span>
                                    <div id="none" className="found__none">
                                    Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va Codestyling bilan tanishing.
                                    </div>
                                </li>
                                <li className="found__itemm">Dart 2 asoslari<span className="found__plus l1">+</span>
                                </li>
                                <li className="found__itemm">Flutter <span className="found__plus l11">+</span></li>
                                <li className="found__itemm">StatefulWidget/StatelessWidget <span className="found__plus l2">+</span></li>
                                <li className="found__itemm">Cupertino vs Material <span className="found__plus l22">+</span></li>
                                <li className="found__itemm">Layout <span className="found__plus l11">+</span></li>
                            </ol>
                        </div>
                            <div className="found__for">Sertifikat</div>
                            <div className="found__flexx">
                                <img src={img2} className="found__imig" alt="" />
                                <div className="found__column">
                                    <div className="found__flexx--head">
                                    Najot Ta’lim diplomi
                                    </div>
                                    <p>
                                    Siz kursni tugatganingizni <br /> tasdiqlaydi va ishga kirishda <br /> qo'shimcha dalil bo'ladi.
                                    </p>
                                </div>
                                <img src={img22}  alt="" style={{marginLeft:"auto", width:400, height:250}}/>
                            </div>
                            <div className="found__for">Ko‘p so‘raladigan savollar</div>
                            <ol className="found__ol1">
                                <li className="found__itemm">Men hech qachon Flutter dasturida ishlab ko’rmaganman. <br /> Men qila olamanmi? <span className="found__plus r">x</span>
                                    <div className="found__none">Siz dasturlash tajribasiga ega bo'lishingiz va yuqori darajadagi tillardan birini bilishingiz kerak. <br /> Boshqa tomondan, tajribali ustozlar sizga kurs davomida sizni nazorat qiladigan yordam beradi.
                                    </div>
                                </li>
                                <li className="found__itemm">Mashg'ulotlar jadvali qanday? Siz kursni ishi borlar <br /> uchun moslashtira olasizmi?<span className="found__plus r1">+</span>
                                </li>
                                <li className="found__itemm">O'qishga haftada necha soat ajratishim kerak? <span className="found__plus r11">+</span></li>
                                <li className="found__itemm">O'qituvchilar bilan aloqa qila olamanmi?<span className="found__plus r2">+</span></li>
                                <li className="found__itemm">Bo’lib to'lash imkoni bormi?<span className="found__plus r22">+</span></li>
                            </ol>
                    </div>
                    <div className="found__right">
                        <div className="found__div">
                            <br />
                        2 400 000 so’m
                        </div>
                        <ul className="found__div--list">
                            <li className="found__div--item">
                            3 ga bo’lim <br />bo’lash imkoni
                            </li>
                            <li className="found__div--item">
                            Boshlanish vaqti: <br />30.10.2021
                            </li>
                        </ul>
                        <hr className="found__hr" />
                        <ul style={{display:"flex"}}>
                            <li>800 so’m / oyiga</li>
                            <li style={{marginLeft:30}}>4 ta joy qoldi</li>
                        </ul>
                        <ul style={{display:"flex", marginTop:20, alignItems:"center"}}>
                            <li>
                                <a href="#" className="found__link" >
                                    <img src={photo} alt="" />
                                    Oldindan ko'rish
                                </a>
                            </li>
                            <li>
                                <button className="found__btn">Sotib Olish &#x2192;</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer/>
        </div>
    )
}