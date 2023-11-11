
import "../styles/ComponentStyles.css"
import Logo from "../assets/Logo.png"

let NavbarComponent=()=>{
    return(
        <>
        <div className="NavContainer">
        <img src={Logo} alt="logo_png" className="chirpLogo" />
        </div>
        </>
    )
}


export default NavbarComponent
