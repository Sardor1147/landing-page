import "./part.scss"
import comp from "../../Assets/images/illus.png"
import { Link } from "react-router-dom"
export default function Part() {


    return(
        <div className="part">
            <div className="part__left">
                <div className="part__left--item">
                <div style={{display:"flex"}}>
                <h2 className="part__head"><br /> <br /> Dasturlash </h2>
                <img src={comp} alt="" className="part__img" />
                </div>
                <p style={{width:315}}>
                Sodda til bilan tushuntirilganda, insonlarga baxt eltuvchi, ularni muammolariga qulay yechim ko’rsatuvchi soha.
                </p>
                <Link to={"/kurs/online/dasturlash"}>
                <span className="part__span">Kurslarni tanlash &#8594;</span>
                </Link>
                </div>
                <div className="part__left--item1">
                    <div>
                        <h2 className="part__head2">Marketing kursiga 30% chegirma</h2>
                        <Link to={"/kurs/online/marketing"}>
                        <span className="part__span">Kurslarni tanlash &#8594;</span>
                        </Link>
                    </div>
                    <div className="part__item1--right">
                    <span className="part__spann">Start:30.09.2021</span> <br />
                        14:12:34 <br />
                        <span className="part__spann">
                        daqiqa qoldi
                        </span>
                    </div>
                </div>
            </div>
            <div className="part__right">
                <div className="part__right--item">
                    <div className="part__right--cont">
                        <h3 className="part__head3"><br /> <br /> Dizayn</h3>
                        <p className="part__right--txt">Doimiy ravishda rivojlanib boruvchi va tobora ko'proq raqobatni keltirib chiqaradigan jahon bozorida mahsulotni targ'ib qilishning eng samarali vositalaridan biri.</p>
                        <Link to={"/kurs/online/dizayn"}>
                        <span className="part__span">Kurslarni tanlash &#8594;</span>
                        </Link>
                    </div>
                </div>
                <div className="part__right--item1" style={{marginTop:30, background:"../../Assets/images/Group1.png"}}>
                    <div className="part__right--cont">
                        <h3 className="part__head4"><br /> <br /> Marketing</h3>
                        <p className="part__right--txt">Jamiyat uchun qadr-qiymati bor boʻlgan narsalarni yetkazish va ular bilan kommunikatsiya qilish uchun harakatlar yigʻindisi.</p>
                        <Link to={"/kurs/online/marketing"}>
                        <span className="part__span">Kurslarni tanlash &#8594;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}