import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import './RegistrationModal.css';

const RegistrationModal = ({ onClose }) => {
  const { googleAccount, loginWithGoogle, register } = useAuth();
  const [step, setStep] = useState(googleAccount ? 2 : 1);
  const [googleEmail, setGoogleEmail] = useState('');
  const [googlePassword, setGooglePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    school: '',
    birthDate: ''
  });

  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!googleEmail.includes('@')) {
      toast.error('Email manzilini togri kiriting!');
      return;
    }
    
    if (googlePassword.length < 4) {
      toast.error('Parol kamida 4 ta belgidan iborat bolishi kerak!');
      return;
    }
    
    setIsLoading(true);
    const loginResult = await loginWithGoogle(googleEmail, googlePassword);
    setIsLoading(false);
    
    // STRICT VALIDATION: Only proceed if login is explicitly successful
    if (loginResult === true) {
      // SUCCESS: User authenticated, close modal and allow access
      onClose();
    } else if (loginResult === false) {
      // NOT FOUND: User doesn't exist, allow registration
      setStep(2);
    } else {
      // ERROR (null): Wrong password or server error
      // Modal stays open, user cannot access the site
      // Error message already shown by AuthContext via toast
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.school && formData.birthDate) {
      setIsLoading(true);
      const success = await register(formData);
      setIsLoading(false);
      if (success) {
        onClose();
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="registration-modal" data-aos="zoom-in">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {step === 1 ? (
          <>
            <h2>Kirish</h2>
            <p>Davom etish uchun Google hisobingizni kiriting</p>
            <form onSubmit={handleGoogleSubmit}>
              <div className="form-group">
                <label>Google Email</label>
                <div className="google-input-wrapper">
                  <span className="google-icon-small">G</span>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com"
                    value={googleEmail}
                    onChange={(e) => setGoogleEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Parol</label>
                <input 
                  type="password" 
                  placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                  value={googlePassword}
                  onChange={(e) => setGooglePassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-btn google-btn" disabled={isLoading}>
                <span className="google-logo">G</span> {isLoading ? 'Yuklanmoqda...' : 'Google bilan davom etish'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2>Profilni toldiring</h2>
            <p>{googleAccount?.email || 'Yangi profil'} orqali royxatdan otasiz</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label>Ism</label>
                  <input 
                    type="text" 
                    placeholder="Ism"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Familiya</label>
                  <input 
                    type="text" 
                    placeholder="Familiya"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Maktab</label>
                <input 
                  type="text" 
                  placeholder="Maktabingizni kiriting"
                  value={formData.school}
                  onChange={(e) => setFormData({...formData, school: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Tugilgan sana</label>
                <input 
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Yuklanmoqda...' : 'Mening profilimni yaratish'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
