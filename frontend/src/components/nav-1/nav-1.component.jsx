import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import "./nav-1.styles.scss"
import { height } from "@mui/system";

const Nav1=()=>{
    return(
        <div className="nav-container">
            <div className="logo-container">
                <div><img src={Logo} alt='logo' style={
                        {
                            width:"100px",
                            height:"80px"
                        }
                    }/>
                </div>
            </div>
        </div>

    );
};

export default Nav1;