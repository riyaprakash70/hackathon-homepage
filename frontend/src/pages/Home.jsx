import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FeaturedHackathons from '../components/FeaturedHackathons';
import Stats from '../components/Stats';
import ProcessTimeline from '../components/ProcessTimeline';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="homepage-wrapper" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <div className="main-content-container" style={{ position: 'relative', marginTop: '-60px', zIndex: 10 }}>
        <SearchBar />
        <FeaturedHackathons />
        <Stats />
        <ProcessTimeline />
        <Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default Home;