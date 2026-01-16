import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth, googleProvider } from '../config/firebase';
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';

const AuthContext = createContext();
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [loading, setLoading] = useState(true);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in with Firebase
        // Sync with backend
        try {
          const res = await fetch(`${API_URL}/auth/google-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              uid: firebaseUser.uid
            })
          });
          
          const userData = await res.json();
          
          if (res.ok) {
            setUser(userData);
            localStorage.setItem('edutest_user', JSON.stringify(userData));
          }
        } catch (err) {
          console.error('Backend sync error:', err);
        }
      } else {
        // User is signed out
        setUser(null);
        localStorage.removeItem('edutest_user');
      }
      
      setLoading(false);
      setIsInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  // Google Sign-In
  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      // Sync with backend
      const res = await fetch(`${API_URL}/auth/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          uid: firebaseUser.uid
        })
      });

      const userData = await res.json();

      if (res.ok) {
        setUser(userData);
        localStorage.setItem('edutest_user', JSON.stringify(userData));
        toast.success('Google orqali muvaffaqiyatli kirdingiz! ✅');
        return true;
      } else {
        toast.error(userData.message || 'Hato yuz berdi ❌');
        return false;
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      
      if (error.code === 'auth/popup-closed-by-user') {
        toast.info('Kirish bekor qilindi');
      } else if (error.code === 'auth/cancelled-popup-request') {
        // Ignore - multiple popups
      } else {
        toast.error('Google orqali kirishda hato ❌');
      }
      
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Register with additional info
  const register = async (userData) => {
    if (!user) {
      toast.error('Avval Google orqali kiring');
      return false;
    }

    try {
      const res = await fetch(`${API_URL}/auth/update-profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          ...userData
        })
      });

      const updatedUser = await res.json();

      if (res.ok) {
        setUser(updatedUser);
        localStorage.setItem('edutest_user', JSON.stringify(updatedUser));
        toast.success('Profil muvaffaqiyatli yangilandi! 🎉');
        return true;
      } else {
        toast.error(updatedUser.message || 'Hato yuz berdi ❌');
        return false;
      }
    } catch (err) {
      toast.error('Serverga ulanishda hato ❌');
      return false;
    }
  };

  // Update grade
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

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('edutest_user');
      toast.info('Tizimdan chiqildi 🚪');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Chiqishda hato');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loginWithGoogle, 
      register, 
      updateGrade, 
      logout, 
      isInitialized,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
