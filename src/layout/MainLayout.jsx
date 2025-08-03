import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import ContactSection from '../components/Contact';

function MainLayout() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background Image Layer */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://img.freepik.com/premium-photo/black-background-dark-backdrop-smooth-wave-black-wallpaper_715671-1433.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80" /> {/* Optional black overlay */}
      </div>

      <Header />

      <main className="pt-24 min-h-screen relative z-10">
        <Outlet />
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}

export default MainLayout;
