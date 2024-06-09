import Header from "../Header/Header"
import Footer from "../footer/footer"
import "./blog.scss"
import { Link } from "react-router-dom"

import img1 from "../../Assets/images/Group253.png"
import img2 from "../../Assets/images/Group252.png"
import img3 from "../../Assets/images/Group251.png"
export default function Blog() {
    return(
        <div className="blog">
            <div className="about__header">
            <Header/>
            </div>
            <br />
            <span style={{color:'#C4C4C4', marginLeft:60}}>
                    <Link to={"/"} className="hover">Bosh sahifa</Link>&#8594;<Link to={"/blog"} className="hover">Blog</Link>
                </span>
                <div className="" style={{display:"flex", marginLeft:60, marginTop:20   }}>
                    <img src={img1} alt="" />
                    <div style={{marginLeft:30}}>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" style={{marginTop:20}} />
                    </div>
                </div>
                <ul className="blog__list">
                    <li className="blog__item">
                    Barcha maqolalar
                    </li>
                    <li className="blog__item">
                    Dasturlash
                    </li>
                    <li className="blog__item">
                    Dizayn
                    </li>
                    <li className="blog__item">
                    Marketing
                    </li>
                </ul>
            <Footer/>
        </div>
    )
}