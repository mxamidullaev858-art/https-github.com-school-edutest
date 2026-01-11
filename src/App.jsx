import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Schools from './components/Schools/Schools'
import ModernEducation from './components/ModernEducation/ModernEducation'
import Access from './components/Access/Access'
import Footer from './components/Footer/Footer'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import SchoolsAdmin from './pages/Admin/Schools/Schools'
import Students from './pages/Admin/Students/Students'
import Teachers from './pages/Admin/Teachers/Teachers'
import Lessons from './pages/Admin/Lessons/Lessons'
import Games from './pages/Admin/Games/Games'
import Statistics from './pages/Admin/Statistics/Statistics'
import Settings from './pages/Admin/Settings/Settings'
import RegistrationModal from './components/Auth/RegistrationModal'
import GradeSelector from './components/Auth/GradeSelector'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = () => {
  const { user, register, updateGrade, isInitialized } = useAuth();
  const [showRegModal, setShowRegModal] = useState(false);
  const [showGradeSelector, setShowGradeSelector] = useState(false);

  useEffect(() => {
    // Listen for custom login trigger from Navbar
    const handleTriggerLogin = () => {
      if (!user) setShowRegModal(true);
    };
    
    // Listen for grade change trigger
    const handleTriggerGradeChange = () => {
      setShowGradeSelector(true);
    };

    window.addEventListener('trigger-login', handleTriggerLogin);
    window.addEventListener('trigger-grade-change', handleTriggerGradeChange);
    
    return () => {
      window.removeEventListener('trigger-login', handleTriggerLogin);
      window.removeEventListener('trigger-grade-change', handleTriggerGradeChange);
    };
  }, [user]);

  if (!isInitialized) return null;

  return (
    <>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="schools" element={<SchoolsAdmin />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="games" element={<Games />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Public Routes (Landing Page) */}
        <Route path="*" element={
          <div className="app-container">
            <Navbar onLoginClick={() => setShowRegModal(true)} />
            <Hero />
            <Features />
            <Schools />
            <ModernEducation />
            <Access />
            <main style={{ padding: '0', textAlign: 'center' }}>
              {/* Further sections will go here */}
            </main>
            <Footer />
          </div>
        } />
      </Routes>

      {/* Registration & Grade Flow */}
      {showRegModal && !user && (
        <RegistrationModal 
          onClose={() => setShowRegModal(false)}
        />
      )}

      {(user && !user.grade || (user && showGradeSelector)) && (
        <GradeSelector onSelect={(grade) => {
          updateGrade(grade);
          setShowGradeSelector(false);
        }} />
      )}
      <ToastContainer position="top-right" theme="dark" autoClose={3000} />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
    });
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  )
}


export default App
