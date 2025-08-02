import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import ContactSection from '../components/Contact';

function MainLayout() {
  return (
    <div
      className="min-h-screen bg-black text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/black-background-dark-backdrop-smooth-wave-black-wallpaper_715671-1433.jpg')", // Replace with your image path
        backgroundAttachment: 'fixed', // Optional: makes image stay while scrolling
      }}
    >
      <Header />
      
      <div className="pt-25 bg-black/80 min-h-screen">
        {/* Add overlay with black background to make content readable */}
        <Outlet />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default MainLayout;
