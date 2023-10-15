import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component.jsx'
import Home from './routes/home/home.component.jsx'
import SignIn from './routes/sign-in/sign-in.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}> 
        <Route index element={<Home/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
        <Route path='wishlist'/>
        <Route path='chat'/>
      </Route>
    </Routes>
  );
}

export default App;