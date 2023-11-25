import "./login-form.styles.css";
import Login from "../../assets/login-page.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';

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
                    Welcome back to EaseAssist
                </h1>
               
                <form id="sign-in" onSubmit={handleChange}>
                    <div className="form-group">
                        <label className="l" htmlFor="input-1">Email</label>
                        <input type="email" className="email-1" id='input-1' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label className="l" htmlFor="input-2">Password</label>
                        <input type="password" className="password-2" id='input-2' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

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
            <p className="p" > Don't have an account. <span ><Link to="/sign-up" className="sign-up-container">Sign up</Link></span></p>
            {/* <div className="d-flex justify-content-center align-items-center my-4">
                <div>
                    <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </Button>
                    <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Button>
                    <Button variant="outline-light" className="btn-icon-only btn-pill text-dark">
                        <FontAwesomeIcon icon={faGithub} />
                    </Button>
                </div>
            </div> */}

        </div>
    );


}



export default LogInForm;
