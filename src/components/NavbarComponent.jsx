
import "../styles/ComponentStyles.css"
import logo from "../assets/logo.png"

let NavbarComponent=()=>{
    return(
        <>
        <div className="NavContainer">
        <img src={logo} alt="logo_png" className="chirpLogo" />
        </div>
        </>
    )
}


export default NavbarComponent
