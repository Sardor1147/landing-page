import Course from "../Courses/course"
import Header from "../Header/Header"
import Footer from "../footer/footer"
import Li from "../li/li"
import Wrapper from "../wrapper/wrapper"
import "./dasturlash.scss"

export default function Dasturlash() {
    return(
        <div className="code">
            <div className="code__head">
            <Header/>
            </div>
            <Course/>
            <div className="code__flex">
                <Wrapper/>
                <Li/>
            </div>
            <Footer/>
        </div>
    )
}