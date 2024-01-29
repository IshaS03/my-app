import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainImg1 from '../components/MainImg1';
import Services from '../components/Services';
import Work2 from '../components/Work2';

const Project = () => {
  return (
    <div>
      <Navbar />
      <MainImg1 Heading="PROJECTS" Text="These are my recent projects" />
      <Work2 />
      <Services />
      <Footer />
    </div>
  )
}

export default Project