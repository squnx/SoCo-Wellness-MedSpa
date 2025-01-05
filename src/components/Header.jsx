import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  // State to manage the dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown and prevent closing the mobile menu
  const handleDropdownToggle = (event) => {
    event.stopPropagation(); // Prevents the menu from closing
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header id="header" className="header d-flex align-items-center coffee-background sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* <h1 className="sitename">SoCo</h1> */}
          <img src="/logo-soco.png" alt="" className="img-fluid"></img>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            {/* Dropdown menu */}
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              
              <a href="#" onClick={handleDropdownToggle}>
                <span>Services</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              {/* Toggle visibility based on state */}
              <ul style={{ display: isDropdownOpen ? 'block' : 'none' }}>
                <li><NavLink to="/tlsr" activeclassname="active">TLSR</NavLink></li>
                <li><NavLink to="/facial" activeclassname="active">Facial Aesthetic Design</NavLink></li>
                <li><NavLink to="/wellness" activeclassname="active">Wellness Program</NavLink></li>
                <li><NavLink to="/k-advanced" activeclassname="active">K-advanced</NavLink></li>
                <li><NavLink to="/other-treatments" activeclassname="active">Special Treatments</NavLink></li>
              </ul>
            </li>
            {/* <li><NavLink to="/departments" activeclassname="active">Departments</NavLink></li> */}
            <li><NavLink to="/promos" activeclassname="active">Promos</NavLink></li>
            {/* <li><NavLink to="/gallery" activeclassname="active">Gallery</NavLink></li> */}
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            <li><NavLink to="https://na02.patientnow.com/a/socowellnessmedspa/" target="_blank" className="cta-btn">Book Online</NavLink></li>
          </ul>

          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <div className="align-items-center work-hour d-none d-sm-block">
          <i className="bi bi-clock me-1"></i> Monday - Saturday, 10AM to 6PM
        </div>
        <div className="header-social-links d-none d-sm-block">
          {/* <a href="" className="twitter"><i className="bi bi-twitter-x"></i></a> */}
          <a href="https://www.facebook.com/socoaghc/" title="Facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/socoaghc/" title="Instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://g.co/kgs/jBv2vkX" title="Google" target="_blank" rel="noreferrer"><i className="bi bi-google"></i></a>
          <a href="https://www.yelp.com/biz/soco-wellness-med-spa-fullerton" title="Yelp" target="_blank" rel="noreferrer"><i className="bi bi-yelp"></i></a>
        </div>

      </div>
    </header>
  );
}

export default Header;
