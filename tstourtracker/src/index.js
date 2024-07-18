import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Home from './App';
import About from './components/about';
import Discography from './components/discography';
import Events from './components/events';
import Footer from './components/Footer';
import Links from './components/links';
import MainSet from './components/mainSet';
import Navbar from './components/Navbar';
import Outfits from './components/outfits';
import SurpriseSongs from './components/surpriseSongs';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router basename="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprisesongs" element={<SurpriseSongs />} />
        <Route path="/about" element={<About />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/events" element={<Events />} />
        <Route path="/links" element={<Links />} />
        <Route path="/mainset" element={<MainSet />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
