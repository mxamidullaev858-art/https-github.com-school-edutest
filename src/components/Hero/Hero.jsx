import React, { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const elements = document.querySelectorAll('.parallax-shape');
      elements.forEach((el) => {
        const speed = el.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleStart = () => {
    window.dispatchEvent(new CustomEvent('trigger-login'));
  };

  return (
    <div className="hero-container" id="home">
      {/* Static Background Image with Overlay */}
      <div className="hero-bg-image"></div>
      <div className="hero-overlay"></div>

      {/* Floating Parallax Elements (Shapes/Icons) */}
      <div className="parallax-shapes">
        {/* Book Icon */}
        <div className="parallax-shape shape-1" data-speed="5">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
        {/* Pencil/Pen */}
        <div className="parallax-shape shape-2" data-speed="-5">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
        </div>
        {/* Calculator/Math */}
        <div className="parallax-shape shape-3" data-speed="2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
        </div>
        {/* Atom/Science */}
        <div className="parallax-shape shape-4" data-speed="-2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"></path></svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title" data-aos="fade-up" data-aos-duration="1000">
          Kelajak Ta'limi <span className="highlight-text">Bugundan</span> Boshlanadi
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          38,000 dan ortiq oqituvchilar tomonidan yaratilgan ish varaqalari, amaliy mashqlar va organishni rivojlantiruvchi oyinlarni kashf eting!
        </p>
        
        <div className="hero-btns" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="400">
          <button className="btn-primary" onClick={handleStart}>Hoziroq Boshlash</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
