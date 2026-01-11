import React from 'react';
import './Schools.css';

const Schools = () => {
  return (
    <section className="schools-section">
      <div className="schools-container">
        
        {/* Left Decoration: Dashed Path + School Icon */}
        <div className="decoration-left">
          <svg className="path-svg" viewBox="0 0 200 400" fill="none">
             <defs>
               <linearGradient id="dashedGradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="#00c6ff" />
                 <stop offset="100%" stopColor="#0072ff" />
               </linearGradient>
             </defs>
             {/* Dashed curve going down and inward */}
             <path d="M50 0 Q 0 150, 150 250 T 180 380" stroke="url(#dashedGradientLeft)" strokeWidth="2" strokeDasharray="10 10" fill="none" className="dashed-path"/>
          </svg>
          <div className="icon-box school-icon">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 11h8M8 15h8M9 4v1m6-1v1" /></svg>
          </div>
        </div>

        {/* Central Content */}
        <div className="schools-content" data-aos="fade-up">
          <h2 className="schools-title">EduTest Maktablar va Tumanlar uchun</h2>
          <p className="schools-description">
            Bizning kompleks, standartlarga mos qoshimcha dasturimiz maktab mamuriyati va oqituvchilarga oquvchilarda matematika, oqish, yozish, tabiiy fanlar va boshqa koplab sohalarda zaruriy konikmalarni rivojlantirishga yordam beradi.
          </p>
          <button className="schools-btn">Batafsil ma'lumot</button>
        </div>

        {/* Right Decoration: Dashed Path + Computer Icon */}
        <div className="decoration-right">
           <svg className="path-svg" viewBox="0 0 200 400" fill="none">
             <defs>
               <linearGradient id="dashedGradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="#00f2fe" />
                 <stop offset="100%" stopColor="#4facfe" />
               </linearGradient>
             </defs>
             {/* Dashed curve mirrors the left */}
             <path d="M150 0 Q 200 150, 50 250 T 20 380" stroke="url(#dashedGradientRight)" strokeWidth="2" strokeDasharray="10 10" fill="none" className="dashed-path"/>
          </svg>
          <div className="icon-box computer-icon">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schools;
