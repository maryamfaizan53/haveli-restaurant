import React from 'react';
import Gallery from '@/app/components/gallery/gallery';
import Contact from '@/app/components/contact/page';
import Navbar from './components/Navbar';
import Menu from './components/menu/menu';
import HomePage from './components/home/home';
import About from './components/about/about';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage/>
      <About />
      <Menu/>
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
