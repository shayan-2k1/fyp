import "./nav-2.styles.css"
import Profile from '../../assets/profile.png'

const Nav2=()=>{    
    return(
        <nav>
            <input type="text" class="search-input" placeholder="Search Here"/>        
            <div class="moreinfo">
                <p id="info">Save</p>
                <p id="info">Notification</p>
                <p id="info">Blogs</p>
            </div>
            <div class="profile-container">
                <img class="profile-image" src={Profile} id="profile" alt="image not found"/>
                <div class="information">
                    <h3 id="name">Name</h3>
                </div>
            </div>
        </nav>
);
};

export default Nav2;