import React from 'react';
import Team from './Team';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';

function About() {
  return (
    <>
      <Navbar />

      <Hero/>
      <Team/>

      <Footer />
    </>
  );
}

export default About;