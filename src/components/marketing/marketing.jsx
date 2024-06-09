import Header from "../Header/Header"
import Wrapper from "../wrapper/wrapper"
import Footer from "../footer/footer"
import Course from "../Courses/course"
export default function Marketing() {
    return(
        <div className="code">
            <div className="code__head">
                <Header/>
            </div>
            <Course/>
            <div className="code__flex">
                <Wrapper/>
                <span style={{fontSize:36, fontWeight:"bold", marginLeft:300, marginTop:100}}>Marketing kurslar</span>
            </div>
            <Footer/>
        </div>
    )
}