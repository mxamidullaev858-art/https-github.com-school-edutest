import React from 'react';
import './ModernEducation.css';

const ModernEducation = () => {
  return (
    <section className="modern-section">
      <div className="modern-container" data-aos="fade-up">
        
        {/* Left Column: Features List */}
        <div className="modern-left">
          
          {/* Item 1 */}
          <div className="modern-feature">
            <div className="feature-icon icon-purple">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            </div>
            <div className="feature-text">
              <h3>Professional Dizayn</h3>
              <p>Oquvchilar e'tiborini tortuvchi, xalqaro standartlarga mos premium interfeys.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="modern-feature">
            <div className="feature-icon icon-blue">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <div className="feature-text">
              <h3>Istalgan Joyda, Istalgan Vaqtda</h3>
              <p>100% Mobil moslashuvchanlik orqali talim jarayoni hech qachon to'xtamaydi.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="modern-feature">
            <div className="feature-icon icon-green">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <div className="feature-text">
              <h3>Yashin Tezligida Ishlash</h3>
              <p>Eng so'nggi texnologiyalar asosida qurilgan, soniyalar ichida yuklanuvchi tizim.</p>
            </div>
          </div>

        </div>

        {/* Right Column: Highlight Card */}
        <div className="modern-right">
          <div className="highlight-card">
            <div className="card-icon-main">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><polyline points="7 8 12 13 17 8"></polyline></svg>
            </div>
            <h2>Kelajak Texnologiyalari</h2>
            <p>Biz faqat bugungi kun emas, balki kelajak talimi uchun yechimlar yaratamiz.</p>
            {/* Decorative Dots */}
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ModernEducation;
