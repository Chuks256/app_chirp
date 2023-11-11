
import "../styles/ComponentStyles.css"
import Logo from "../assets/Logo.png"

let Navbar=()=>{
    return(
        <>
        <div className="NavContainer">
        <img src={Logo} alt="logo_png" className="chirpLogo" />
        </div>
        </>
    )
}


export default Navbar
