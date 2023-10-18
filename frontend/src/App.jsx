import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import Nav2 from './components/nav-2/nav-2.component.jsx';
import Form3 from './components/form-3/form-3.component';
import SideBar from "./components/sidebar/sidebar.component";
import { Fragment } from 'react';

function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Navigation/>}> 
    //     <Route index element={<Home/>}/>
    //     <Route path='/sign-in' element={<SignIn/>}/>
    //   </Route>
    // </Routes>
    <>
      <Nav2/>
      <SideBar/>
      <Form3/>
    </>
  );
};

export default App;