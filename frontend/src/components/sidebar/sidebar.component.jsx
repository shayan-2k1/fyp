import Menu from '../../assets/menu-bar.png';
import Profile from '../../assets/profile.svg';
import DocW from '../../assets/doc-wallet.png';
import Mentor from '../../assets/mentor.svg';
import Email from '../../assets/email.svg';
import Explore from '../../assets/explore.svg';
import Track from '../../assets/track.svg';
import Group from '../../assets/groups.svg';
import { Link } from 'react-router-dom';
import "./sidebar.styles.css";

const SideBar=()=>{
    return(
        <nav>
            <div class="sideBar">
                <input type="checkbox" id="toggle-menu" class="toggle-checkbox"/>
                <label for="toggle-menu" class="menu-icon">
                <img class="menuPic" src={Menu} alt="Menu Icon"/>
                </label>

                <div class="vertical-menu">
                <label for="toggle-menu" class="close-button">&#10006;</label>
                <Link to="/profile" className="nav-link">Profile</Link>
                <a class="ic" href="#"><img class="icons" src={Profile}/>&nbspProfile</a>
                <a class="ic" href="#"><img class="icons" src={DocW}/>&nbspDoc Wallet</a>
                <a class="ic" href="#"><img class="icons" src={Mentor}/>&nbspMentors</a>
                <a class="ic" href="#"><img class="icons" src={Email}/>&nbspEmail</a>
                <a class="ic" href="#"><img class="icons" src={Explore}/>&nbspExplore</a>
                <a class="ic" href="#"><img class="icons" src={Track}/>&nbspTrack Applicatons</a>
                <a class="ic" href="#"><img class="icons" src={Group}/>&nbspGroups</a>
                </div>
            </div>
        </nav>
    );
};

export default SideBar;
