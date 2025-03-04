import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './components/Homepage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Hireus from './components/HireUs';
import './Styles.css'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hireus" element={<Hireus/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
