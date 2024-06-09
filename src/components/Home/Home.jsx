import "./Home.scss"
import Head from "../Head/Head"
import Part from "../part/part"
import Hero from "../Hero/Hero"
import Widget from "../widget/widget"
import Footer from "../footer/footer"
export default function Home() {
    return(
        <div className="home">
            <Head/>
            <Part/>
            <Hero/>
            <Widget/>
            <Footer/>
        </div>
    )
}