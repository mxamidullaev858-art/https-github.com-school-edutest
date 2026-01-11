import React, { useEffect, useState } from 'react';
import './Navbar.css';

import { useAuth } from '../../context/AuthContext';

const Navbar = ({ onLoginClick }) => {
  const [click, setClick] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { user, isInitialized, logout } = useAuth();
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setShowSettings(false);
  };

  const handleLogout = () => {
    if (window.confirm('Haqiqatdan akauntdan chiqmoqchimisiz?')) {
      logout();
      closeMobileMenu();
    }
  };

  const handleGradeChange = () => {
    window.dispatchEvent(new CustomEvent('trigger-grade-change'));
    closeMobileMenu();
  };

  if (!isInitialized) return null;

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <div className="navbar-container">
        {/* Animated Logo */}
        <div className="logo-container" onClick={closeMobileMenu}>
          <div className="logo-box">
             <span className="logo-initial">E</span>
             <svg 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="2" 
               strokeLinecap="round" 
               strokeLinejoin="round"
               className="logo-icon-book"
             >
               <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
               <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
             </svg>
          </div>
          <span className="logo-text">EduTest</span>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={handleClick}>
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             {click ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
           </svg>
        </div>

        {/* Navigation Links */}
        <ul className={click ? 'nav-links active' : 'nav-links'}>
           <li>
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>Bosh sahifa</span>
            </a>
          </li>
          <li>
            <a href="#classes" className="nav-link" onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span>Sinflar</span>
            </a>
          </li>
          <li>
            <a href="#lessons" className="nav-link" onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 1-4 4v14a3 3 0 0 0 3-3h7z"></path></svg>
              <span>Darslar</span>
            </a>
          </li>

          {user && (
            <li className="mobile-only-item">
              <div className="mobile-user-settings">
                 <button className="nav-link" onClick={handleGradeChange}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                   <span>Sinfni ozgartirish</span>
                 </button>
                 <button className="nav-link" onClick={handleLogout}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                   <span>Chiqish</span>
                 </button>
              </div>
            </li>
          )}
          
          {/* Mobile Menu Actions (visible only on mobile) */}
          <li className="mobile-only-item">
            <div className="nav-mobile-actions">
              <button className="btn-info" aria-label="Sayt qollanmasi" title="Sayt qollanmasi">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </button>

              <button className="btn-sun-toggle" aria-label="Toggle theme">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sun-icon">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </button>
            </div>
          </li>
        </ul>

        {/* Action Buttons (Desktop) */}
        <div className="nav-actions">
          {user ? (
            <div className="user-profile-nav" onClick={() => setShowSettings(!showSettings)}>
               <span className="user-name">{user.firstName}</span>
               <span className="user-grade">{user.grade}-sinf</span>
               
               {showSettings && (
                 <div className="settings-dropdown">
                    <button onClick={handleGradeChange}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                       Sinfni ozgartirish
                    </button>
                    <button onClick={handleLogout} className="logout-btn">
                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                       Chiqish
                    </button>
                 </div>
               )}
            </div>
          ) : (
            <button className="btn-login" onClick={onLoginClick}>
              Kirish
            </button>
          )}
          
          <button className="btn-info desktop-only-btn" aria-label="Sayt qollanmasi" title="Sayt qollanmasi">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>

          <button className="btn-sun-toggle desktop-only-btn" aria-label="Toggle theme">
             {/* Sun SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="sun-icon"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
