import './App.scss';
import {Routes,Route} from 'react-router-dom'
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from './routes/sign-up/sign-up.component';
import PersonalInfo from './routes/personal-info/personal-info.component';
import AcademicInfo from './routes/academic-info/academic-info.component';
import StudyInterest from "./routes/study-interest/study-interest.component";

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn/>}/> 
      <Route path='sign-up' element={<SignUp/>}/>
      <Route path='/personal-info' element={<PersonalInfo/>}/>
      <Route path='/academic-info' element={<AcademicInfo/>}/>
      <Route path='/study-interest' element={<StudyInterest/>}/>
    </Routes>
  );
};

export default App;