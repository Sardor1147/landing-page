import "./Head.scss"
import Header from "../Header/Header"
import { Link } from "react-router-dom"
export default function Head() {

    return(
        <div className="head">
            <Header/>
            
            <h1 className="head__head"> <br />
             Shunchaki <br />
            o’quv markazi emas, <br />
            haqiqiy <span style={{color:"#BA8D5B", fontWeight:700}}><u>professionallar </u></span> <br />
            makoni </h1>
            <p className="head__txt">O’zingizga investitiya kiritish <br /> vaqti, biz bilan birga boshlang!</p>
            <br />
            <div className="head__flex">
                <Link to={"/kurs/online/dasturlash"}><button className="head__btn">Kursni tanlang &#8594;</button></Link> <span className="head__btn--span">&#11088; Birinchi dars bepul!</span>
            </div>
        </div>
    )
}