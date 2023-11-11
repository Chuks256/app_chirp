import "../styles/signupStyle.css"
import luvYou from "../assets/luvYou.png"

let SignupPage=()=>{
    return(
        <>
        <div className="container">
        <div className="signupFormContainer">
            <div className="formContainer">
                <div className="formHeader">
                    <h3>Let's Get Started</h3>
                    <p>Get started and start receiving tips</p>
                </div>
                <div className="firstNameContainer">
                    <span>Legal FirstName</span>
                    <input type="text" name="firstName" className="firstNameTxt" placeholder='Legal FirstName'/>
                </div>
                <div className="lastNameContainer">
                    <span>Legal LastName</span>
                    <input type="text" name="lastName" className="lastNameTxt" placeholder='Legal LastName'/>
                </div>
                <div className="bankContainer">
                    <span>Bank</span>
                    <input type="text" name="Bank" className="Bankname" placeholder='Bank'/>
                </div>
                <div className="accountNoContainer">
                    <span>AccountNo</span>
                    <input type="text" name="AccountNo" className="AccountNo" placeholder='AccountNo'/>
                </div>
                <div className="passwordContainer">
                    <span>Password</span>
                    <input type="text" name="password" className="password" placeholder='password'/>
                </div>
                <button className="submitForm">Sign up</button>
            </div>
        </div>
        <img src={luvYou} alt="luvYouImg" className="luvYouImg"/>
        </div>

        </>
    )
}

export default SignupPage