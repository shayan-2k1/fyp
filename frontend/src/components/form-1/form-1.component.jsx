import "./form-1.styles.css";
import Login from "../../assets/login-page.png";
import { Link } from "react-router-dom";

const Form1=()=>{
    return(
    <div class="content-container">
        <div class="form-container">
            <h1 id="welcome">
                WELCOME BACK!
            </h1>
            <p id="p1"> Don't have an account. <span ><Link  to="/sign up" class="sign-up-container">Sign up</Link></span></p>
            <form id="sign-in"> 
                <label for="input-1">Username</label>
                <br></br>
                <input type="text" class="username-1" id='input-1'/>
                <br></br>
                <label for="input-2">Password</label>
                <br></br>
                <input type="text" class="password-2" id='input-2'/>

                <div class="radio-box">
                    <input type="checkbox" name="remember-me" id="checkbox-1" value="Remember-me "  />
                    <label id="check_label" for="checkbox-1">Remember me</label>
                    <p id="forgot">Forget password?</p>
                </div>

                <button id='submit' type="submit">SIGN IN</button>
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

export default Form1;