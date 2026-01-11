import React from 'react';
import './Access.css';

const Access = () => {
  const handleJoin = () => {
    window.dispatchEvent(new CustomEvent('trigger-login'));
  };

  return (
    <section className="access-section">
      <div className="access-container">
        
        {/* Content Side (Left) */}
        <div className="access-content" data-aos="fade-right">
          <h2 className="access-title">Bugunoq kirish imkoniyatiga ega boling!</h2>
          <button className="access-btn" onClick={handleJoin}>Bepul qoshilish</button>
        </div>

        {/* Illustration Side (Right) - Island & Rocket */}
        <div className="access-illustration">
             {/* Island SVG */}
             <svg className="island-svg" viewBox="0 0 500 300" fill="none">
                 {/* Sand/Beach */}
                 <path d="M0 250 Q 250 200, 500 250 V 300 H 0 Z" fill="#fff59d"/>
                 {/* Green Hills */}
                 <path d="M250 250 Q 350 100, 450 250" fill="#4caf50"/>
                 <path d="M350 250 Q 420 150, 500 250" fill="#66bb6a"/>
                 <path d="M400 250 Q 480 180, 550 250" fill="#81c784"/>
             </svg>
             
             {/* Rocket Container */}
             <div className="rocket-wrapper">
                 <svg className="rocket-svg" viewBox="0 0 200 200" fill="none">
                    <path d="M100 20 C 100 20, 140 60, 140 120 C 140 160, 100 180, 100 180 C 100 180, 60 160, 60 120 C 60 60, 100 20, 100 20 Z" fill="#ff9800"/>
                    <circle cx="100" cy="90" r="25" fill="#e1f5fe"/>
                    <circle cx="100" cy="90" r="20" fill="#29b6f6"/> {/* Window Glass */}
                    <path d="M60 120 L 40 160 L 70 160" fill="#d84315"/>
                    <path d="M140 120 L 160 160 L 130 160" fill="#d84315"/>
                    <path d="M85 180 Q 100 250, 115 180" fill="#ff3d00" className="rocket-flame"/>
                 </svg>
             </div>
        </div>
      </div>

      {/* Waves Decoration Removed */}
    </section>
  );
};

export default Access;

