import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AcademicForm = React.lazy(() => import("pages/AcademicForm"));
const PersonalForm= React.lazy(() => import("pages/PersonalForm"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const StudyInterest=React.lazy(() => import("pages/StudyInterest"));
const LandingPage =React.lazy(() => import("pages/Landingpage"));
const DocWallet =React.lazy(() => import("pages/DocWallet"));
const DocWalletView =React.lazy(() => import("pages/DocWalletView"));
const Profile =React.lazy(() => import("pages/Profile"));
const Scholarships =React.lazy(()=>import("pages/Scholarships"))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopone" element={<Login />} />
          <Route path="/desktoptwo" element={<Signup />} />
          <Route path="/desktopthree" element={<PersonalForm />} />
          <Route path="/desktopfour" element={<AcademicForm />} />
          <Route path="/desktopfive" element={<StudyInterest/>} />
          <Route path="/landing" element={<LandingPage/>} />
          <Route path="/docWallet" element={<DocWallet/>} />
          <Route path="/docWalletview" element={<DocWalletView/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Scholarships" element={<Scholarships/>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;