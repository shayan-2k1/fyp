import "./form-2.styles.css";
import Login from "../../assets/login-page.png";
import { Link } from "react-router-dom";

const Form2=()=>{
    return(
    <div class="content-container">
        <div class="form-container">
            <h1 id="welcome">
                CREATE ACCOUNT
            </h1>
            <p id="p1"> Signup for <b>EaseAssist</b> to achieve your goals</p>
            <form id="sign-in">
                <label for="input-1">Email</label>
                <br></br>
                <input type="email" class="email-1" id='input-1'/>
                <br />
                <label for="input-2">Username</label>
                <br></br>
                <input type="text" class="username-2" id='input-2'/>
                <br></br>
                <label for="input-3">Password</label>
                <br></br>
                <input type="text" class="password-3" id='input-3'/>

                <div class="radio-box">
                    <input type="checkbox" name="remember-me" id="checkbox-1" value="Remember-me "  />
                    <label id="check_label1" for="checkbox-1">Remember me</label>
                    
                    <input type="checkbox" name="agree" id="checkbox-2" value="agree"  />
                    <label id="check_label2" for="checkbox-2">I agree to the Terms and Conditions</label>
                    
                </div>

                <button id='submit' type="submit">SIGN UP</button>
            </form>
        </div>
        
        <div className="image-container">
            <img src={Login} alt='logo' style={
                        {
                            width:"200px",
                            height:"250px"
                        }
                    }/>
        </div>

    </div>

    );
};

export default Form2;