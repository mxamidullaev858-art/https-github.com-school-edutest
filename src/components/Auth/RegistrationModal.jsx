import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import './RegistrationModal.css';

const RegistrationModal = ({ onClose }) => {
  const { user, loginWithGoogle, register, loading } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    school: '',
    birthDate: ''
  });

  // If user is already logged in via Google but hasn't completed profile
  useEffect(() => {
    if (user && (!user.firstName || !user.lastName)) {
      setStep(2); // Go to profile completion
    }
  }, [user]);

  const handleGoogleSignIn = async () => {
    const success = await loginWithGoogle();
    if (success) {
      // Check if user needs to complete profile
      // If not, close modal
      if (user?.firstName && user?.lastName) {
        onClose();
      } else {
        setStep(2);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.school && formData.birthDate) {
      const success = await register(formData);
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
            <p>Google akkauntingiz orqali davom eting</p>
            
            <button 
              onClick={handleGoogleSignIn} 
              className="submit-btn google-btn" 
              disabled={loading}
              type="button"
            >
              <span className="google-logo">G</span> 
              {loading ? 'Yuklanmoqda...' : 'Google bilan kirish'}
            </button>
            
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#888' }}>
              Google orqali kirishingiz bilan siz shaxsiy ma'lumotlaringizni ulashishga rozilik bildirasiz
            </p>
          </>
        ) : (
          <>
            <h2>Profilni toldiring</h2>
            <p>{user?.email || 'Google akkaunt'} orqali royxatdan otasiz</p>
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
