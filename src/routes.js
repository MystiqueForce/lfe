import { useEffect } from 'react';
import { Navigate, useNavigate, Route, Routes, useRoutes } from 'react-router-dom';

// layouts
import { DashboardLayout, TutorDashLayout, StudentDashLayout } from './layouts/dashboard';

import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';

import Aboutus from './pages/Aboutus';
import Whyus from './pages/Whyus';

import StudentDashAppPage from './pages/StudentDashAppPage';
import StudentProfilePage from './pages/StudentProfilePage';
import StudentTutorListPage from './pages/StudentTutorListPage';
import StudentAssignPage from './pages/StudentAssignPage';
import StudentLibraryPage from './pages/StudentLibraryPage';
import StudentMeetingPage from './pages/StudentMeetingPage';

import TutorDashAppPage from './pages/TutorDashAppPage';
import TutorProfilePage from './pages/TutorProfilePage';
import TutorsPage from './pages/TutorsPage';
import TutorLogin from "./pages/TutorLogin";
import TutorAssignPage from './pages/TutorAssignPage';
import MyTutorsPage from './pages/MyTutorsPage';
import TutorMeetingPage from './pages/TutorMeetingPage';

import LandingPage from "./pages/LandingPage";
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import TutorSignup from "./pages/TutorSignup";
import StudentSignup from "./pages/StudentSignup";
import StudentsPage from './pages/StudentsPage';
import AstudentsPage from './pages/AstudentPage';
// ----------------------------------------------------------------------

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/open" element={<StudentSignup />}/>
      <Route path="/Aboutus" element ={<Aboutus />} />
      <Route path="/Whyus" element={<Whyus />} />
      <Route path="/TutorLogin" element={<TutorLogin />} />
      <Route path="/StudentLogin" element={<StudentLogin />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/StudentSignup" element={<StudentSignup />} />
      <Route path="/TutorSignup" element={<TutorSignup />} />
      <Route path="/dashboard/*" element={<DashboardLayout />}>
        <Route path="app" element={<DashboardAppPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="students" element={<AstudentsPage />} />
        <Route path="tutors" element={<TutorsPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path='/studentdash/*' element={<StudentDashLayout />}>
        <Route path="app" element={<StudentDashAppPage />} />
        <Route path="myprofile" element={<StudentProfilePage />} />
        <Route path="mytutors" element={<MyTutorsPage />} />
        <Route path="tutorlist" element={<StudentTutorListPage />} />
        <Route path="assignments" element={<StudentAssignPage/>} />
        <Route path="library" element={<StudentLibraryPage/>} />
        <Route path="meeting" element={<StudentMeetingPage/>} />
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path='/tutordash/*' element={<TutorDashLayout />}>
        <Route path="app" element={<TutorDashAppPage />} />
        <Route path="myprofile" element={<TutorProfilePage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="assignments" element={<TutorAssignPage />} />
        <Route path="meetings" element={<TutorMeetingPage/>} />
        <Route path="*" element={<Page404 />} />
      </Route>

    </Routes>
  );
};



export { AppRouter };
