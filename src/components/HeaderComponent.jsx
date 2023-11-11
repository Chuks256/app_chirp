import "../styles/ComponentStyles.css"
import headerPng from "../assets/headerPng.png"
import {Link} from "react-router-dom"


let HeaderComponent=()=>{
return(
    <>
    <div className="headerContainer">
        <div className="headerTextContainer">
        <img className="headerImg" src={headerPng} alt="headerPng" />
    <p className="headerDetails">An Easy And Seamless Way To Receive Tips</p>
        </div>
        <div className="headerButtonContainer">
            <button className="headerBtn">Get Started</button>
            <Link to="/signin" className="headerOthers">Sign in</Link>
        </div>
    </div>
    </>
)
}

export default HeaderComponent
