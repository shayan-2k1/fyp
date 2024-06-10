import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home.jsx";
import NotFound from "pages/NotFound";
import LoadingPage from "pages/LoadingPage";
import RecommendedScholarships from "pages/RecommendedScholarships";
import ShowShortlistedStudents from "pages/ShowShortListed";
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
const Update =React.lazy(()=>import("pages/Update"))
const UploadCertificates=React.lazy(()=>import("pages/UploadCertificates"))
const UploadLinks=React.lazy(()=>import("pages/UploadLinks"))
const SaveScholarships=React.lazy(()=>import("pages/SaveScholarships"))
const Notification=React.lazy(()=>import("pages/Notification"))
const LoginUni = React.lazy(()=>import("pages/LoginUni"))
const SignupUni = React.lazy(()=>import("pages/SignupUni"))
const UpdateUni = React.lazy(()=>import("pages/UpdateUni"))
const ScholarshipPost = React.lazy(()=>import("pages/ScholarshipPost"))
const ScholarshipUniPost = React.lazy(()=>import("pages/ScholarshipUniPost"))
const ApplyScholarship = React.lazy(()=> import("pages/ScholarshipApply"))
const MentorLogin = React.lazy(()=>import("pages/MentorLogin"))
const MentorRequestPage=React.lazy(()=>import("pages/MentorRequestPage"))
const MentorProfile=React.lazy(()=>import("pages/MentorProfile"))
const MentorForm=React.lazy(()=>import("pages/MentorForm"))
const MentorPublished=React.lazy(()=>import("pages/MentorPublished"))
const TrackApplication = React.lazy(()=>import("pages/TrackApplication"))
const MeetingLink = React.lazy(()=> import("pages/Meeting"))
const UpadteLink = React.lazy(()=> import ("pages/UpdateLink"))
const ShowShortlist = React.lazy(()=> import("pages/ShowShortListed"))
const AllMentors=React.lazy(()=>import("pages/AllMentors"))
const SChats=React.lazy(()=>import("pages/SChats"))
const MChats=React.lazy(()=>import("pages/MChats"))
const ShortlistedStudents=React.lazy(()=>import("pages/ShortlistedStudents"))
// const Recommended = React.lazy(()=> import("pages/RecommendedScholarships"))
const AdminLogin = React.lazy(()=>import("pages/LoginAdmin"))
const ViewUni = React.lazy(()=>import("pages/ViewUni") )
const Applications=React.lazy(()=> import("pages/ApplicationsShortlisted"))
const AllApp=React.lazy(()=> import("pages/StudentsAllApplications"))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
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
          <Route path="/Update" element={<Update/>} />
          <Route path="/UploadC" element={<UploadCertificates/>} />
          <Route path="/UploadLinks" element={<UploadLinks/>} />
          <Route path="/SaveScholarships" element={<SaveScholarships/>} />
          <Route path="/Notification" element={<Notification/>} />
          <Route path="/LoginUni" element={<LoginUni/>} />
          <Route path="/SignupUni" element={<SignupUni/>} />
          <Route path="/UpdateUni" element={<UpdateUni/>} />
          <Route path="/ScholarshipPost" element={<ScholarshipPost/>}/>
          <Route path="/uniPost"element={<ScholarshipUniPost/>}/>
          <Route path="/applyPost"element={<ApplyScholarship/>}/>
          <Route path="/MentorLogin" element={<MentorLogin/>} />
          <Route path="/MentorRequestPage" element={<MentorRequestPage/>} />
          <Route path="/MentorProfile" element={<MentorProfile/>} />
          <Route path="/MentorForm" element={<MentorForm/>} />
          <Route path="/MentorPublished" element={<MentorPublished/>} />
          <Route path="/RecommendedScholarships" element={<RecommendedScholarships/>}/>
          <Route path="/tracking" element={<TrackApplication/>}/>
          <Route path="/link" element={<MeetingLink/>}/>
          <Route path="/linkupdate" element={<UpadteLink/>}/>
          <Route path="/shortlisted" element={<ShowShortlist/>}/>
          <Route path="/AllMentors" element={<AllMentors/>} />
          <Route path="/chats" element={<SChats/>} />
          <Route path="/Mchats" element={<MChats/>} />
          <Route path="/Shortlisted" element={<ShowShortlistedStudents/>} />
          <Route path="/ShortlistedStudents" element={<ShortlistedStudents/>} />
          <Route path="/application" element={<Applications/>} />
          <Route path="/Allapplication" element={<AllApp/>} />
          {/* <Route path="/Allapplication" element={AllApp}/> */}
          <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="/viewUni" element={<ViewUni/>}/>

          {/* <Route path="/Recommended" element={<Recommended/>} /> */}
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
