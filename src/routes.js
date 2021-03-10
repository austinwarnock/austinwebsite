import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

// PAGES
import About from './Routes/About';
import Resume from './Routes/Resume';
import Gallery from './Routes/Gallery';
import Portfolio from './Routes/Portfolio';

export default (
  <React.Fragment>
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Gallery />
    <Footer />
  </React.Fragment>
);
