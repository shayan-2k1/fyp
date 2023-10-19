import Menu from '../../assets/menu-bar.png';
import Profile from '../../assets/profile.svg';
import DocW from '../../assets/doc-wallet.png';
import Mentor from '../../assets/mentor.svg';
import Email from '../../assets/email.svg';
import Explore from '../../assets/explore.svg';
import Track from '../../assets/track.svg';
import Group from '../../assets/groups.svg';
import "./sidebar.styles.css";
import { Link } from 'react-router-dom';

const SideBar=()=>{
    return(
        <nav>
            <div className="sideBar">
                <input type="checkbox" id="toggle-menu" className="toggle-checkbox"/>
                <label for="toggle-menu" className="menu-icon">
                <img className="menuPic" src={Menu} alt="Menu Icon"/>
                </label>

                <div className="vertical-menu">
                <label for="toggle-menu" className="close-button">&#10006;</label>
                <Link className="ic">Profile</Link>
                <Link className="ic">Doc Wallet</Link>
                <Link className="ic">Mentors</Link>
                <Link className="ic">Email</Link>
                <Link className="ic">Explore</Link>
                <Link className="ic">Track Applicatons</Link>
                <Link className="ic">Groups</Link>
                </div>
            </div>
        </nav>
    );
};

export default SideBar;