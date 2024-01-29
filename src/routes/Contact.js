import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainImg1 from '../components/MainImg1';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <MainImg1 Heading="CONTACT." Text="You Can Connect with me through..." />
      <Form /> 
      <Footer />
    </div>
  )
}

export default Contact