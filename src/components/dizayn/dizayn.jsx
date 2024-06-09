import Course from "../Courses/course"
import Header from "../Header/Header"
import Footer from "../footer/footer"
import Wrapper from "../wrapper/wrapper"
import "./dizayn.scss"

export default function Dizayn() {
    return(
        <div className="design">
            <div className="code__head">
                <Header/>
            </div>
            <Course/>
            <div className="code__flex">
                <Wrapper/>
                <span style={{fontSize:36, fontWeight:"bold", marginLeft:300, marginTop:100}}>Dizayn kurslar</span>
            </div>
            <Footer/>
        </div>
    )
}