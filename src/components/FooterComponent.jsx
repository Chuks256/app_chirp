import "../styles/footerStyle.css"
import hand from "../assets/hand.png"
import chirpFooter from "../assets/chirpFooter.png"

let FooterComponent=()=>{
    return(
        <>
        <div className="footerContainer">
        <img src={hand} alt="" className="handImg"/>
        <img src={chirpFooter}  className="chirpFooter" alt="" />
        </div>
   </> 
    )
}

export default FooterComponent