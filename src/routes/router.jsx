// src/router/Router.jsx
import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from '../layout/MainLayout'; // Adjust path as needed
import ScrollToTop from '../components/ScrollTop';
import LoadingTicker from '../components/Loader'; // Adjust path as needed
import BlogPage from '../pages/blog/blog';
import HustlifyVision from '../components/resourseform';
import BlogDetail from '../pages/blog/blogDetail';
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Courses = lazy(() => import('../pages/courses/Courses'));
const Resources = lazy(() => import('../pages/resource/resourses'));
// const ContactUs = lazy(() => import('../pages/ContactUs'));



function AppRouter() {
  return (
    <Router>
      <ScrollToTop/>
      {/* Suspense to handle lazy loading of components */}
      <Suspense fallback={<div className="text-center mt-10 text-gray-500"><LoadingTicker/> </div>}>
        <Routes>
          {/* 👇 Wrap all pages inside MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
           <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<BlogPage />} />
          
          <Route path="/form" element={<HustlifyVision />  }/>
          <Route path="/blog/:id" element={<BlogDetail />} />
          

            {/* <Route path="contact" element={<ContactUs />} /> */}  
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
