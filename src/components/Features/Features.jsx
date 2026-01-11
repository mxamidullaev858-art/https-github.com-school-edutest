import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section" id="classes">
      <div className="features-container">
        {/* Header Section */}
        <div className="features-header" data-aos="fade-up">
          <h2 className="section-title">Bizning O'quv Kutubxonamiz</h2>
          <p className="section-subtitle">
            Minglab raqamli va bosma resurslar bilan oquvchingiz uchun eng yaxshisini toping.
            {/* Decorative Arrow Left */}
            <svg className="decorative-arrow arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" fill="none">
              <path d="M50 100 C 150 150, 350 0, 445 50" stroke="#00c6ff" strokeWidth="3" strokeDasharray="10 5" fill="none" />
              <path d="M440 30 L 450 50 L 420 60" stroke="#00c6ff" strokeWidth="3" fill="none" />
            </svg>
          </p>
          <button className="btn-cta">
            Barchasini Ko'rish
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        {/* Grid Cards */}
        <div className="features-grid">
          {/* Card 1: Lesson Plans */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-icon icon-blue">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 1-4 4v14a3 3 0 0 0 3-3h7z"></path></svg>
            </div>
            <h3>Dars Rejalari</h3>
            <p>
              Bepul va tayyor dars ishlanmalari yordamida sifatli talim berishni osonlashtiring. Standartlarga mos keluvchi mukammal manba.
            </p>
            <button className="card-btn">Rejani ko'rish</button>
          </div>

          {/* Card 2: Worksheets */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-icon icon-green">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3>Ish Varaqalar</h3>
            <p>
              Har bir mavzu uchun maxsus ish varaqalar! Yozuv mashqlaridan tortib, murakkab masalalargacha barchasi mavjud.
            </p>
            <button className="card-btn">Yuklab olish</button>
          </div>

          {/* Card 3: Games */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="card-icon icon-purple">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4"></path><path d="M8 10v4"></path><line x1="15" y1="13.5" x2="15" y2="13.5"></line><line x1="18" y1="10.5" x2="18" y2="10.5"></line></svg>
            </div>
            <h3>Oyinlar</h3>
            <p>
              Organishni sarguzashtga aylantiring! Matematika va til organishni qiziqarli oyinlar orqali mustahkamlash.
            </p>
            <button className="card-btn">O'ynash</button>
          </div>

          {/* Card 4: Activities */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div className="card-icon icon-orange">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>
            </div>
            <h3>Mashgulotlar</h3>
            <p>
              Ijodiy va amaliy topshiriqlar bilan fanni jonlantiring. Ilmiy tajribalar va san'at loyihalari.
            </p>
            <button className="card-btn">Bajarib ko'rish</button>
          </div>
        </div>
        
        {/* Decorative Arrow Right - Positioned below cards */}
        <svg className="decorative-arrow arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" fill="none">
           <path d="M50 90 C 150 100, 350 150, 450 38" stroke="#00c6ff" strokeWidth="3" strokeDasharray="10 5" fill="none" />
           <path d="M430 25 L 460 30 L 460 60" stroke="#00c6ff" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default Features;
