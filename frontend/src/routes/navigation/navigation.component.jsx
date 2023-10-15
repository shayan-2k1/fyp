import './navigation.styles.scss'
import Logo from '../../assets/logo.png'
import {Outlet, Link} from 'react-router-dom'
import {Fragment} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Navigation = () =>{
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div><img src={Logo} alt='logo' style={
                        {
                            width:"70px",
                            height:"70px"
                        }
                    }/></div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to ='chat'>CHAT</Link>
                    <Link className='nav-link' to ='wishlist'>FAVOURITE</Link>
                    <Link className='nav-link' to ='sign-in'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;