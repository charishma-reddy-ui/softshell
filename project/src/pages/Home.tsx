import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;