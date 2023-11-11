import "../styles/footerStyle.css"
import hand from "../assets/hand.png"
import chirpfooter from "../assets/chirpfooter.png"

let FooterComponent=()=>{
    return(
        <>
        <div className="footerContainer">
        <img src={hand} alt="" className="handImg"/>
        <img src={chirpfooter}  className="chirpFooter" alt="" />
        </div>
   </> 
    )
}

export default FooterComponent