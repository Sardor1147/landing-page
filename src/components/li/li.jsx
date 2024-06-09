import "./li.scss"
import img from "../../Assets/images/Ellipse24.png"
import info from "../../Assets/images/info.svg"
import { Link } from "react-router-dom"
export default function Li() {
    return(
        <div className="li">
            <ul className="li__list">
                <Link to={"/kurs/online/dasturlash/foundation"}>
                <li className="li__item">
                    <abbr className="li__abbr" title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.">
                        <img src={info} alt="" />
                    </abbr>
                    <span className="li__head">Foundation</span>
                    <div className="li__teacher">
                        <img className="li__teacher--img" src={img} alt="" /> Sulaymon Ne'matov
                    </div>
                    <div className="li__a">
                    Davomiylik: 6 oy <span className="li__span">Darslar soni: 24 ta</span>
                    </div>
                </li>
                </Link>
                <Link to={"/kurs/online/dasturlash/foundation"}>
                <li className="li__item">
                    <abbr className="li__abbr" title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.">
                        <img src={info} alt="" />
                    </abbr>
                    <span className="li__head">Foundation</span>
                    <div className="li__teacher">
                        <img className="li__teacher--img" src={img} alt="" /> Husan Musayev
                    </div>
                    <div className="li__a">
                    Davomiylik: 6 oy <span className="li__span">Darslar soni: 16 ta</span>
                    </div>
                </li>
                </Link>
                <li className="li__item">
                    <abbr className="li__abbr" title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.">
                        <img src={info} alt="" />
                    </abbr>
                    <span className="li__head">Web dasturlash</span>
                    <div className="li__teacher">
                        <img className="li__teacher--img" src={img} alt="" /> Muhammad Yunus
                    </div>
                    <div className="li__a">
                    Davomiylik: 6 oy <span className="li__span">Darslar soni: 12 ta</span>
                    </div>
                </li>
                <li className="li__item">
                    <abbr className="li__abbr" title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.">
                        <img src={info} alt="" />
                    </abbr>
                    <span className="li__head">Backend</span>
                    <div className="li__teacher">
                        <img className="li__teacher--img" src={img} alt="" /> Muhammad Husayn
                    </div>
                    <div className="li__a">
                    Davomiylik: 6 oy <span className="li__span">Darslar soni: 14 ta</span>
                    </div>
                </li>
                <li className="li__item">
                    <abbr className="li__abbr" title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.">
                        <img src={info} alt="" />
                    </abbr>
                    <span className="li__head">Bootcamp</span>
                    <div className="li__teacher">
                        <img className="li__teacher--img" src={img} alt="" /> Abduqahharova Fotima
                    </div>
                    <div className="li__a">
                    Davomiylik: 6 oy <span className="li__span">Darslar soni: 16 ta</span>
                    </div>
                </li>
                <li className="li__item">
                    <abbr className="li__abbr" title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.">
                        <img src={info} alt="" />
                    </abbr>
                    <span className="li__head">Kiberxavfsizlik va Raspberry Pi...</span>
                    <div className="li__teacher">
                        <img className="li__teacher--img" src={img} alt="" /> Saud Abdulwahed
                    </div>
                    <div className="li__a">
                    Davomiylik: 6 oy <span className="li__span">Darslar soni: 24 ta</span>
                    </div>
                </li>
                <li className="li__item">
                    <abbr className="li__abbr" title="Flutter - bu Android va iOS uchun mobil dasturlarni, shuningdek Google korporatsiyasi tomonidan ishlab chiqilgan va ishlab chiqilgan Dart dasturlash tilidan foydalanadigan veb-ilovalarni yaratish uchun ochiq manbali ishlab chiqarish to'plami va ramkasi.">
                        <img src={info} alt="" />
                    </abbr>
                    <span className="li__head">Flutter</span>
                    <div className="li__teacher">
                        <img className="li__teacher--img" src={img} alt="" /> Saud Abdulwahed
                    </div>
                    <div className="li__a">
                    Davomiylik: 6 oy <span className="li__span">Darslar soni: 18 ta</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}