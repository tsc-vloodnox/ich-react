import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Header from "./components/header";
import Footer from "./components/footer";
import Jobs from "./pages/Jobs";
import Home from "./pages/home";
import Candidates from "./pages/Candidates";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Signup from "./components/authentication/Signup";
import JobsList from "./components/Jobs/JobsList";
import JobDetails from "./components/Jobs/JobDetails";
import NewJob from "./components/Jobs/NewJob";
import Login from "./components/authentication/Login";
import CandidateDetails from "./components/Candidate/CandidateDetails";
import NoFound from "./pages/NoFound";
import ForgotPassword from "./components/authentication/ForgotPassword";
import CompanySignUp from "./components/Companys/CompanySignUp";
import AdminInterface from "./components/admin/AdninInterface";
import Blog from "./pages/Blog";
import Company from "./pages/Company";


function App() {
  // const { currentUser } = useAuth();

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // }

  return (
    <div className="App">
      <Router>
        <Header />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/job-list" element={<JobsList />} />
            <Route path="/jobs/job-details" element={<JobDetails />} />
            <Route
              path="/jobs/new-job"
              element={
                // <RequireAuth>
                <NewJob />
                // </RequireAuth>
              }
            />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/candidates/candidate-details" element={<CandidateDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile"
              element={
                // <RequireAuth>
                <Profile />
                // </RequireAuth>
              }
            />
            <Route path="/companys" element={<Company />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/company-signup"
              element={
                // <RequireAuth>
                <CompanySignUp />
                // </RequireAuth>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/admin" element={<AdminInterface />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </AuthProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
