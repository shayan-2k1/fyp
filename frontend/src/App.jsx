import './App.scss';
import {Routes,Route, Router} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import Profile from './routes/profile/profile.component.jsx';
import Nav2 from './components/nav-2/nav-2.component.jsx';
import Form3 from './components/form-3/form-3.component';
import SideBar from "./components/sidebar/sidebar.component";
import DocWallet from './routes/docWallet/docWallet.component';

function App() {
  return (
    // <Router>
    //  
    // <Routes>
    <>
   <Nav2/>
    <SideBar/>
    <DocWallet/>
    {/* <Profile/> */}
    </>
   
    
  );
};

export default App;