import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo/LogoLetras.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt='Imagen Logo JIS Development'/>
        </div>
        <button className={`${windowWidth > 784 ? 'oculto' : 'navbar-toggle'}`} onClick={toggleAccordion}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
        <div className={`navbar-links ${isOpen && windowWidth <= 784 ? 'active' : ''}`}>
          <a href="#sobreNosotros">About</a>
          <a href="#opcionesDePago">Payment options</a>
          <a href="#Contacto">Contact us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
