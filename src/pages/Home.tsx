import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import RegulatoryDisclosure from '../components/RegulatoryDisclosure';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <RegulatoryDisclosure />
      <Contact />
    </>
  );
};

export default Home;