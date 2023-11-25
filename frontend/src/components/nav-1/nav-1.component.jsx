import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import "./nav-1.styles.scss"
import { height } from "@mui/system";

const Nav1=()=>{
    return(
        <nav className=" nav-container">
            
            <div className="logo-container">
                <div><Link to={'/'}><img src={Logo} alt='logo' style={
                        {   
                            width:"80px",
                            height:"60px"
                        }
                    }/></Link>
                    

                </div>
            </div>
        </nav>

    );
};

export default Nav1;