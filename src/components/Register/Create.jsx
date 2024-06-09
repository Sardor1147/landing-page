import logo from "../../Assets/images/Logo.svg";
import "./Create.scss";
export default function Create() {
    const handleSubmit = (e) =>{
        e.preventDefault()
        let a = document.querySelector("#a")
        let b = document.querySelector("#b")
        let c = document.querySelector('.error')
        if(a.value == "" || b.value == "") {
            c.style.display = "block"
            alert("aeirughirogu")
            a.style.border = "1px solid red"
            b.style.border = "1px solid red"

        } else {
            alert("ok")
            window.localStorage.setItem("userName", a.value)
            window.localStorage.setItem("password", b.value)

        }
    }
    return(
        <div className="create">
            <ul className="create__list">
                <li className="create__item">
                    <img src={logo} alt="twitter" className="create__logo" />
                </li>
                <br />
                <li className="create__item">
                <h1 className="create__head">
                Create an account
                </h1>
                </li>
                <br />
                <span className="error">*Red fields are compulsory</span>
                <li className="create__item">
                    <input type="text" placeholder="userName" id="a" className="create__inp" />
                </li>
                <br />
                <li className="create__item">
                    <input type="password" placeholder="password" id="b" className="create__inp" />
                </li>
                
                <br />
                <li className="create__item">
                    <a href="#" className="create__change">
                        Use email
                    </a>
                </li>
                <br />
                <li className="create__item">
                    <h2 className="create__head">Date of birth</h2>
                    <br />
                    <p className="create__txt">
                    Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                    </p>
                </li>
                <br />
                <li className="create__item">
                    <input type="number" className="create__birthday" placeholder="Month" /> <input className="create__birthday" type="number" placeholder="Day" /> <input type="number" placeholder="Year" className="create__birthday"/>
                </li>
                <br />
                <br />
                
            </ul>
            <button className="create__btn" onClick={handleSubmit}>Next</button>
        </div>
    )
}