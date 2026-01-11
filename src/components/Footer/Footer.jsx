import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <div className="logo-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="book-icon">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <span className="logo-text">EduTest</span>
          </div>
          <p className="footer-tagline">
            Kelajak talimi uchun eng zamonaviy platforma. Biz bilan organing va rivojlaning.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Sahifalar</h3>
          <ul className="footer-links">
            <li><a href="#home">Bosh sahifa</a></li>
            <li><a href="#classes">Sinflar</a></li>
            <li><a href="#lessons">Darslar</a></li>
            <li><a href="#about">Biz haqimizda</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h3 className="footer-title">Resurslar</h3>
          <ul className="footer-links">
            <li><a href="#">Kutubxona</a></li>
            <li><a href="#">Video Darslar</a></li>
            <li><a href="#">Oqituvchilar uchun</a></li>
            <li><a href="#">Yordam markazi</a></li>
          </ul>
        </div>

        {/* Contact/Social */}
        <div className="footer-col">
          <h3 className="footer-title">Boglanish</h3>
          <div className="social-links">
            <a href="#" className="social-icon telegram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            </a>
            <a href="#" className="social-icon instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-icon youtube">
               <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
            </a>
          </div>
          <p className="contact-email">admin@edutest.uz</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 EduTest. Barcha huquqlar himoyalangan.</p>
        <div className="footer-bottom-links">
           <a href="#">Maxfiylik siyosati</a>
           <a href="#">Foydalanish shartlari</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
