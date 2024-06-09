import a from "../../Assets/images/Logo.svg";
import "./Enter.scss"

import { Link } from "react-router-dom";
export default function Enter() {
const enterHandle = (e) =>{
    e.preventDefault()
    let a = document.querySelector("#a")
    let b = document.querySelector("#b")

    if(a.value == window.localStorage.getItem("name") && b.value == window.localStorage.getItem("password")){
        alert("ok")
    } else(
        alert("wefgew")
    )
}
    return(
        <div className="enter">
            <ul className="enter__list">
                <li>
                    <img src={a} alt="bird" />
                    <h3 className="enter__head">Log in to <br /> <span style={{fontWeight:900}}>Najot Ta'lim </span>platform</h3>
                </li>
                <li>
                    <input type="text" className="w enter__in" id="a" placeholder="your username"/>
                    <br /><br />
                    <input type="password" className="w enter__in" id="b" placeholder="your password"/>
                </li>
                <br />
            <button className="enter__btn w" onClick={enterHandle}>Log in</button>
            <br />
            <br />
            <div className="w enter__w">
                <Link to={"/sign-up"}>
                <a href="#">Forgot password?</a>
                </Link>
                <Link to={"/sign-up"}>
                <a href="#">New to Najot Ta'lim</a></Link>
            </div>
            </ul>
            
        </div>
    )
}