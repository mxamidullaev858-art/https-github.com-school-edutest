import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-icon">E</div>
          <h2>EduAdmin</h2>
        </div>
        
        <nav className="sidebar-nav">
          <NavLink to="/admin" end className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
            <span className="icon">📊</span> Boshqaruv
          </NavLink>
          <NavLink to="/admin/schools" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
            <span className="icon">🏫</span> Maktablar
          </NavLink>
          <NavLink to="/admin/students" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
            <span className="icon">👨‍🎓</span> Oquvchilar
          </NavLink>
          <NavLink to="/admin/teachers" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
             <span className="icon">👨‍🏫</span> Oqituvchilar
          </NavLink>
          <NavLink to="/admin/lessons" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
             <span className="icon">📚</span> Darslar
          </NavLink>
          <NavLink to="/admin/games" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
             <span className="icon">🎮</span> Oyinlar
          </NavLink>
          <NavLink to="/admin/statistics" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
             <span className="icon">📈</span> Statistika
          </NavLink>
          <NavLink to="/admin/settings" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
             <span className="icon">⚙️</span> Sozlamalar
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/" className="sidebar-link back-home">
             <span className="icon">🏠</span> Saytga Qaytish
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-search">
            <input type="text" placeholder="Qidirish..." />
          </div>
          <div className="header-profile">
            <button className="btn-info" aria-label="Sayt qollanmasi" title="Sayt qollanmasi" style={{ background: 'none', border: 'none', color: '#00e676', cursor: 'pointer', padding: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </button>
            <button className="btn-sun-toggle" aria-label="Toggle theme" style={{ background: 'none', border: 'none', color: '#ffd700', cursor: 'pointer', padding: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
            <div className="notif-icon">🔔</div>
            <div className="profile-pic">Admin</div>
          </div>
        </header>
        
        <div className="admin-content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
