import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import SignIn from './routes/sign-in/sign-in.component.jsx';
import Nav1 from './components/nav-1/nav-1.component.jsx';
import Form2 from './components/form-2/form-2.component';
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
      <Nav1/>
      <Form2/>
    </>
  );
};

export default App;