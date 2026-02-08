import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import About from './pages/About';
import { Footer } from './components/Footer';
import ScrollToTop from './ScrollToTop';
import FeedbackButton from './FeedbackButton';
import EMICalculator from './pages/EMICalculator';
import BlogDetails from './pages/BlogDetails';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import AdminBlog from './components/AdminBlog';
import AdminHome from './components/AdminHome';
import AdminDataCreate from './components/AdminDataCreate';
import Careers from './pages/Career';
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicyPage from './pages/CookiePolicyPage';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className="App">
        {/* Always visible FeedbackButton placed here */}
        <FeedbackButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/loans/:loanName" element={<Detail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          {/* Catch-all route for 404 Not Found */}
          <Route path="/careers" element={<Careers />} />
          {/* Admin Routes */}
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/:key" element={<AdminBlog />} />
          {/* <Route path="/admin/:key/create" element={<AdminDataCreate />} /> */}
          <Route path="/admin/:key/:blogid" element={<AdminDataCreate />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
