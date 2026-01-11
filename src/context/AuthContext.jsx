import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [googleAccount, setGoogleAccount] = useState(null); 
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('edutest_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsInitialized(true);
  }, []);

  const loginWithGoogle = async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data);
        localStorage.setItem('edutest_user', JSON.stringify(data));
        toast.success('Tizimga muvaffaqiyatli kirdingiz! ✅');
        return true;
      } else {
        toast.error(data.message || 'Hato yuz berdi ❌');
        if (res.status === 404) {
          setGoogleAccount({ email, password, avatar: '👤' });
          return false; // Not found, proceed to register
        }
        return null; // Stop
      }
    } catch (err) {
      toast.error('Serverga ulanishda hato ❌');
      return null;
    }
  };

  const register = async (userData) => {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...userData,
          email: googleAccount ? googleAccount.email : 'guest@edutest.uz',
          password: googleAccount ? googleAccount.password : userData.password,
          avatar: '👤'
        })
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data);
        localStorage.setItem('edutest_user', JSON.stringify(data));
        toast.success('Akkaunt muvaffaqiyatli yaratildi! 🎉');
        setGoogleAccount(null);
        return true;
      } else {
        toast.error(data.message || 'Hato yuz berdi ❌');
        return false;
      }
    } catch (err) {
      toast.error('Serverga ulanishda hato ❌');
      return false;
    }
  };

  const updateGrade = async (grade) => {
    if (!user) return;
    try {
      const res = await fetch(`${API_URL}/auth/update-grade`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, grade })
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data);
        localStorage.setItem('edutest_user', JSON.stringify(data));
        toast.success(`${grade}-sinfga muvaffaqiyatli otdingiz! ✨`);
      } else {
        toast.error('Sinfni yangilashda hato ❌');
      }
    } catch (err) {
      toast.error('Serverga ulanishda hato ❌');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('edutest_user');
    toast.info('Tizimdan chiqildi 🚪');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      googleAccount, 
      loginWithGoogle, 
      register, 
      updateGrade, 
      logout, 
      isInitialized 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

