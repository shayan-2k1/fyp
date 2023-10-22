import "./login-form.styles.css";
import Login from "../../assets/login-page.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie

const LogInForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Change to false

    const handleChange = async (e) => {
        e.preventDefault();
        setError(null); // Clear any previous errors

        try {
            const response = await axios.post("http://localhost:3000/student/signin", {
                email: email,
                password: password
            });
            
            // Save the authentication token to a cookie
            if (response.data.token) {
                Cookies.set('auth_token', response.data.token, { expires: 1 }); // Set the token in a cookie
            }

            console.log(response.data);
            navigate("/personal-info");
        } catch (error) {
            console.log(error);
            setError("Failed to sign in!");
        }

        setLoading(false);
    };

    return (
        <div className="content-container">
            <div className="form-container">
                <h1 id="welcome">
                    WELCOME BACK!
                </h1>
                <p id="p1"> Don't have an account. <span ><Link to="/sign-up" className="sign-up-container">Sign up</Link></span></p>
                <form id="sign-in" onSubmit={handleChange}>
                    <label htmlFor="input-1">Email</label>
                    <br></br>
                    <input type="email" className="email-1" id='input-1' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br></br>
                    <label htmlFor="input-2">Password</label>
                    <br></br>
                    <input type="password" className="password-2" id='input-2' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="radio-class">
                        <input type="checkbox" name="remember-me" id="checkbox-1" value="Remember-me " />
                        <label id="check_label" htmlFor="checkbox-1">Remember me</label>
                        <p id="forgot">Forget password?</p>
                    </div>

                    <button id='submit' type="submit">SIGN IN</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>

            <div className="image-container">
                <img src={Login} alt='logo' style={{ width: "200px", height: "250px" }} />
            </div>
        </div>
    );
};

export default LogInForm;
