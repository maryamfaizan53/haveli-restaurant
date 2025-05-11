import React from 'react';
import Gallery from '@/app/gallery/page';
import Contact from '@/app/contact/page';
import Menu from './menu/page';
import HomePage from './home/page';
import About from './about/page';

const Home = () => {
  return (
    <div>
      <HomePage/>
      <About />
      <Menu/>
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
